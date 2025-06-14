import { createRouter } from '@tanstack/react-router';
import { routeTree } from './Config';

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
  defaultPreload: 'intent',
});
