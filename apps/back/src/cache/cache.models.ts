import { Championship } from '@repo/models';

export type CacheKey = Championship | 'schedule';

export type CacheItem = {
  key: CacheKey;
  val: unknown;
  ttl?: number;
};
