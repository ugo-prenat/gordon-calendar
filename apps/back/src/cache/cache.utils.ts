import cache from './cache';
import { CacheKey } from './cache.models';

export const addToCache = (key: CacheKey, value: unknown) =>
  cache.set(key, value);
