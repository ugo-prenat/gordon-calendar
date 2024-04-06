import { Championship, IMotorsportEvent } from '@repo/models';

export type CacheKey = Championship;

export type CacheItem = {
  key: CacheKey;
  val: IMotorsportEvent[];
  ttl?: number;
};
