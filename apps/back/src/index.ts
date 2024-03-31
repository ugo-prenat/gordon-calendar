import { serve } from '@hono/node-server';
import { createServer } from './server';

const port = +process.env.PORT;
const server = createServer();

serve({ fetch: server.fetch, port }, () =>
  console.log(`\n⚡️back listening on port ${port}`)
);
