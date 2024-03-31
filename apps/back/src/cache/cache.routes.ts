import { Hono } from 'hono';
import cache from './cache';

const cacheRoute = new Hono();

cacheRoute.get('/', (c) => c.json(cache.mget(cache.keys())));
cacheRoute.get('/stats', (c) => c.json(cache.getStats()));
cacheRoute.get('/keys', (c) => c.json(cache.keys()));
cacheRoute.get('/ttl', (c) =>
  c.json(cache.keys().map((key) => ({ [key]: cache.getTtl(key) })))
);

export default cacheRoute;
