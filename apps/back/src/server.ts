import { cors } from 'hono/cors';
import { Hono } from 'hono';

import scheduleRoute from './services/schedule/schedule.routes';
import { honoLogger } from './utils/honoLogger.utils';

export const createServer = () => {
  const app = new Hono();

  app.use('*', cors());
  app.use('*', honoLogger());

  app.route('/schedule', scheduleRoute);

  app.notFound((c) => {
    const { method, path } = c.req;
    return c.json({ error: `route ${method} ${path} not found` }, 404);
  });

  app.onError((err, c) => {
    const error = new Error('Hono error', { cause: err });
    return c.json(error, 500);
  });

  return app;
};
