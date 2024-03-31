import { cors } from 'hono/cors';
import { Hono } from 'hono';

import scheduleRoute from './services/schedule/schedule.routes';

export const createServer = () => {
  const app = new Hono();

  app.use('*', cors());
  // app.use('*', honoLogger());

  app.route('/schedule', scheduleRoute);

  app.notFound((c) => {
    const { method, path } = c.req;
    // logger.error(`route ${path} not found`);
    return c.json({ error: `route ${method} ${path} not found` }, 404);
  });

  // app.onError((err, c) => {
  //   const { url, method } = c.req.raw;
  //   const { message } = err;

  //   const error = new APIError(message, 500, {
  //     url,
  //     method,
  //     api: 'app-back',
  //     response: { name: 'Hono error', message }
  //   });
  //   return c.json(logError(error), error.status);
  // });

  return app;
};
