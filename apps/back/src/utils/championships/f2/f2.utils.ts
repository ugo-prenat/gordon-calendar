import { fetcher } from '../../fetcher';
import { F2_BASE_API_URL } from '../../../constants';
import { F1Promotions, IF1PromotionsResponse } from '@repo/models';

export const f2Fetcher = <T>(url: string, init?: RequestInit): Promise<T> =>
  fetcher['GET'](`${F2_BASE_API_URL}${url}?website=f2`, {
    headers: { apiKey: process.env.F2_API_KEY, ...init?.headers },
    ...init
  });

const formatF1PromotionsData =
  (key: F1Promotions) => (data: IF1PromotionsResponse) => {};
