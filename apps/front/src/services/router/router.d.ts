import { router } from './index.router';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
