import {
  createRootRouteWithContext,
  createRoute,
  Outlet,
  redirect,
} from '@tanstack/react-router';
import { Suspense } from 'react';
import { privateRoutes, publicRoutes } from './Lists';
import type { RouterContext } from './types';
import NotFound from '../components/layouts/NotFound';
import PublicLayout from '@/components/layouts/PublicRouteLayouts';
import PrivateLayout from '@/components/layouts/PrivateRouteLayouts';

const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  ),
  notFoundComponent: NotFound,
});

export const publicLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'public',
  component: PublicLayout,
});

export const privateLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  beforeLoad: ({ context, location }) => {
    if (!context.auth?.user) {
      throw redirect({ to: '/login', search: { redirect: location.href } });
    }
  },
  component: PrivateLayout,
});

const publicChildRoutes = publicRoutes.map((route) =>
  createRoute({
    getParentRoute: () => publicLayoutRoute,
    path: route.path,
    component: route.component,
  })
);

const privateChildRoutes = privateRoutes.map((route) =>
  createRoute({
    getParentRoute: () => privateLayoutRoute,
    path: route.path,
    component: route.component,
  })
);

const indexRedirectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: ({ context }) => {
    if (context.auth?.user) {
      throw redirect({ to: '/dashboard' });
    }
    throw redirect({ to: '/login' });
  },
});

const routeTree = rootRoute.addChildren([
  indexRedirectRoute,
  publicLayoutRoute.addChildren(publicChildRoutes),
  privateLayoutRoute.addChildren(privateChildRoutes),
]);

export { rootRoute, routeTree };
