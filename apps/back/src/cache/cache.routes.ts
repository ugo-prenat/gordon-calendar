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

// cacheRoute.get('/test-f2', (c) => getF2Races().then(c.json));
// cacheRoute.get('/test-f3', (c) => getF3Races().then(c.json));
// cacheRoute.get('/test-fa', (c) => getFARaces().then(c.json));

export default cacheRoute;
