import { lazy } from 'react';

export const publicRoutes = [
  {
    path: '/login',
    component: lazy(() => import('../pages/login')),
  },
];

export const privateRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/dashboard')),
  },
];
