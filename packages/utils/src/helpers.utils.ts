import lodashIsEqual from 'lodash.isequal';

export const isEmpty = (value: unknown) =>
  value === undefined ||
  value === null ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (Array.isArray(value) && value.length === 0) ||
  (typeof value === 'object' && Object.keys(value).length === 0);

export const isNotEmpty = (value: unknown) => !isEmpty(value);

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const cleanArray = <T>(array: T[]): T[] =>
  array.filter((item) => item !== null && item !== undefined && item !== '');

export const isEqual = lodashIsEqual;
