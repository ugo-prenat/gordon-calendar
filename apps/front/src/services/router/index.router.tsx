import {
  createRouter,
  createRootRoute,
  createRoute,
  Outlet
} from '@tanstack/react-router';

import Nav from '@components/nav/Nav';
import AdminPage from '@pages/admin/Admin.page';
import CalendarPage from '@pages/calendar/Calendar.page';
import SettingsPage from '@pages/settings/Settings.page';
import NotFoundPage from '@pages/notFound/NotFound.page';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
    </>
  )
});

const calendarRoute = createRoute({
  path: '/',
  component: CalendarPage,
  getParentRoute: () => rootRoute
});

const settingsRoute = createRoute({
  path: '/settings',
  component: SettingsPage,
  getParentRoute: () => rootRoute
});

const adminRoute = createRoute({
  path: '/admin',
  component: AdminPage,
  getParentRoute: () => rootRoute
});

const routeTree = rootRoute.addChildren([
  calendarRoute,
  settingsRoute,
  adminRoute
]);

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage
});
