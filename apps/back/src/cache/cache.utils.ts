import cache from './cache';
import { CacheKey } from './cache.models';

import f2RawMock from './mocks/raw/f2-raw-mock.json';

export const addToCache = (key: CacheKey, value: unknown) =>
  cache.set(key, value);

const refreshCache = () => {
  // fetch data from API

  console.log('---');
  console.log('Cache refreshed');
  console.log('---');
};

const buildCacheWithMocks = () => {
  addToCache('f2', f2RawMock);
  console.log('---');
  console.log('Cache built with mocks');
  console.log('---');
};

export const initCache = () => {
  console.log('Cache initialization...');

  return process.env.USE_API_MOCKS ? buildCacheWithMocks() : refreshCache();
};
