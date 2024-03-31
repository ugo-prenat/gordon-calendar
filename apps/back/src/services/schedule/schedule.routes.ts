import { Hono } from 'hono';
import { getSchedule } from './schedule.controllers';

const scheduleRoute = new Hono();

scheduleRoute.get('/', (c) => getSchedule(c));

export default scheduleRoute;
