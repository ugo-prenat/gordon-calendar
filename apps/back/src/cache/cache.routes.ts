import { Hono } from 'hono';
import cache from './cache';

const cacheRoute = new Hono();

cacheRoute.get('/', (c) => c.json(cache.mget(cache.keys())));
cacheRoute.get('/infos', (c) =>
  c.json({
    stats: cache.getStats(),
    keys: cache.keys().map((key) => ({ key, ttl: cache.getTtl(key) }))
  })
);
export default cacheRoute;
