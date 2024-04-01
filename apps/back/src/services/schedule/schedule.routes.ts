import { Hono } from 'hono';
import { getSchedule } from './schedule.controllers';
import {
  getF2Races,
  getF3Races,
  getFARaces
} from '../../utils/championships/f1Promotions/f1Promotions.api';

const scheduleRoute = new Hono();

scheduleRoute.get('/', (c) => getSchedule(c));

scheduleRoute.get('/test-f2', (c) => getF2Races().then(c.json));
scheduleRoute.get('/test-f3', (c) => getF3Races().then(c.json));
scheduleRoute.get('/test-fa', (c) => getFARaces().then(c.json));

export default scheduleRoute;
