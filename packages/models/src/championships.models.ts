import {
  FA,
  F2,
  F3,
  MOTORSPORT_CHAMPIONSHIPS,
  CHAMPIONSHIPS
} from '@repo/constants';

export type F1Promotions = typeof F2 | typeof F3 | typeof FA;
export type MotorsportChampionship = (typeof MOTORSPORT_CHAMPIONSHIPS)[number];
export type Championship = (typeof CHAMPIONSHIPS)[number];
