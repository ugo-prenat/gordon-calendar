import { Championship } from '@repo/models';
import { CHAMPIONSHIPS_NAMES } from '../constants';

export const getChampionshipName = (championship: Championship): string =>
  CHAMPIONSHIPS_NAMES[championship];
