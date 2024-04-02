import { Hono } from 'hono';
import cache from './cache';

const cacheRoute = new Hono();

cacheRoute.get('/', (c) => c.json(cache.mget(cache.keys())));
cacheRoute.get('/infos', (c) => {
  const stats = cache.getStats();
  const keys = cache.keys();

  return c.json({
    stats,
    keys: keys.map((key) => ({ key, ttl: cache.getTtl(key) }))
  });
});

export default cacheRoute;
