import { Championship, IEvent } from '@repo/models';

export type CacheKey = Championship;

export type CacheItem = {
  key: CacheKey;
  val: IEvent[];
  ttl?: number;
};
