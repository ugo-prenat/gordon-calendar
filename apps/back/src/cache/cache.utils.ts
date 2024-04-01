import NodeCache from 'node-cache';
import cache from './cache';

import f2FormattedMock from './mocks/formatted/f2-formatted-mock.json';
import f3FormattedMock from './mocks/formatted/f3-formatted-mock.json';
import faFormattedMock from './mocks/formatted/fa-formatted-mock.json';

export const addToCache = (values: NodeCache.ValueSetItem[]) =>
  cache.mset(values);

const refreshCache = () => {
  // fetch data from API here

  console.log('---');
  console.log('Cache refreshed');
  console.log('---');
};

const buildCacheWithMocks = () => {
  addToCache([
    { key: 'f2', val: f2FormattedMock },
    { key: 'f3', val: f3FormattedMock },
    { key: 'fa', val: faFormattedMock }
  ]);
  console.log('Cache built with mocks');
  console.log('---');
};

export const initCache = () => {
  console.log('Cache initialization...');

  return process.env.USE_API_MOCKS ? buildCacheWithMocks() : refreshCache();
};
