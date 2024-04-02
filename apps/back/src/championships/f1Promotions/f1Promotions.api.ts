import {
  f1PromotionsFetcher,
  formatF1PromotionsResponse
} from './f1Promotions.utils';

export const getF2Races = () =>
  f1PromotionsFetcher('/races', {
    promotion: 'f2',
    apiKey: process.env.F2_API_KEY
  }).then(formatF1PromotionsResponse('f2'));

export const getF3Races = () =>
  f1PromotionsFetcher('/races', {
    promotion: 'f3',
    apiKey: process.env.F3_API_KEY
  }).then(formatF1PromotionsResponse('f3'));

export const getFARaces = () =>
  f1PromotionsFetcher('/races', {
    promotion: 'fa',
    apiKey: process.env.FA_API_KEY
  }).then(formatF1PromotionsResponse('fa'));
