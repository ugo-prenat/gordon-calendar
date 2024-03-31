import { serve } from '@hono/node-server';
import { createServer } from './server';
import { initCache } from './cache/cache.utils';

const port = process.env.PORT;
const server = createServer();

initCache();

serve({ fetch: server.fetch, port }, () =>
  console.log(`\n⚡️back listening on port ${port}`)
);
