import { Championship } from '@repo/models';

//  CACHE
export const CACHE_TTL = 60 * 60 * 24 * 7; // 1 week

export const F1_CACHE_KEY = 'f1';
export const F2_CACHE_KEY = 'f2';
export const F3_CACHE_KEY = 'f3';
export const FA_CACHE_KEY = 'fa';
export const SCHEDULE_CACHE_KEY = 'schedule';

export const CACHE_KEYS = [
  F1_CACHE_KEY,
  F2_CACHE_KEY,
  F3_CACHE_KEY,
  FA_CACHE_KEY,
  SCHEDULE_CACHE_KEY
] as const;

// APIs
export const F1_BASE_API_URL = 'https://api.formula1.com/v1';
export const F1_PROMOTIONS_BASE_API_URL =
  'https://api.formula1.com/v1/f2f3-fom-results';

// CHAMPIONSHIPS
export const CHAMPIONSHIPS_NAMES: Record<Championship, string> = {
  f1: 'FIA Formula One World Championship',
  f2: 'FIA Formula 2 Championship',
  f3: 'FIA Formula 3 Championship',
  fa: 'FIA Formula One Academy Championship'
};
