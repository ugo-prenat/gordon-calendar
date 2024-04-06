import { Championship } from '@repo/models';

export type CacheKey = Championship;

export type CacheItem = {
  key: CacheKey;
  val: unknown;
  ttl?: number;
};
