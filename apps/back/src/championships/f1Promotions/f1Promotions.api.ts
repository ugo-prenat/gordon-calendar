import { F1Promotions, IMotorsportEvent } from '@repo/models';
import { formatF1PromotionsResponse } from './f1Promotions.utils';
import { fetcher } from '../../utils/fetcher.utils';
import { F1_PROMOTIONS_BASE_API_URL } from '../../constants';
import { IF1PromotionsResponse } from './f1Promotions.models';

export const f1PromotionsFetcher = (
  url: string,
  { promotion, apiKey }: { promotion: F1Promotions; apiKey: string },
  init?: RequestInit
): Promise<IF1PromotionsResponse> =>
  fetcher['GET'](`${F1_PROMOTIONS_BASE_API_URL}${url}?website=${promotion}`, {
    headers: { apiKey, ...init?.headers },
    ...init
  });

export const getF2Races = (): Promise<IMotorsportEvent[]> =>
  f1PromotionsFetcher('/races', {
    promotion: 'f2',
    apiKey: process.env.F2_API_KEY
  }).then(formatF1PromotionsResponse('f2'));

export const getF3Races = (): Promise<IMotorsportEvent[]> =>
  f1PromotionsFetcher('/races', {
    promotion: 'f3',
    apiKey: process.env.F3_API_KEY
  }).then(formatF1PromotionsResponse('f3'));

export const getFARaces = (): Promise<IMotorsportEvent[]> =>
  f1PromotionsFetcher('/races', {
    promotion: 'fa',
    apiKey: process.env.FA_API_KEY
  }).then(formatF1PromotionsResponse('fa'));
