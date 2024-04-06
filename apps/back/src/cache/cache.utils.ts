import f1FormattedMock from './mocks/formatted/f1-formatted-mock.json';
import f2FormattedMock from './mocks/formatted/f2-formatted-mock.json';
import f3FormattedMock from './mocks/formatted/f3-formatted-mock.json';
import faFormattedMock from './mocks/formatted/fa-formatted-mock.json';

import cache from './cache';
import { CacheItem, CacheKey } from './cache.models';
import { IMotorsportEvent } from '@repo/models';

export const addToCache = (values: CacheItem[]) => cache.mset(values);

export const getFromCache = (keys: CacheKey[]) =>
  cache.mget<IMotorsportEvent[]>(keys);

const refreshCache = () => {
  // fetch data from API here

  console.log('---');
  console.log('Cache refreshed');
  console.log('---');
};

const buildCacheWithMocks = () => {
  addToCache([
    { key: 'f1', val: f1FormattedMock as IMotorsportEvent[] },
    { key: 'f2', val: f2FormattedMock as IMotorsportEvent[] },
    { key: 'f3', val: f3FormattedMock as IMotorsportEvent[] },
    { key: 'fa', val: faFormattedMock as IMotorsportEvent[] }
  ]);
  console.log('Cache built with mocks');
  console.log('---');
};

export const initCache = () => {
  console.log('Cache initialization...');

  return process.env.USE_API_MOCKS ? buildCacheWithMocks() : refreshCache();
};
