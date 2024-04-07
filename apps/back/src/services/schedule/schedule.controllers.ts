import { Context } from 'hono';
import { findParamsErrors, getSessionsByDays } from './schedule.utils';
import { Championship, IScheduleDay } from '@repo/models';

export const getSchedule = (c: Context) => {
  const { champs, start, end } = c.req.query();

  const maybeParamsErrors = findParamsErrors(c);
  if (maybeParamsErrors) return c.json({ error: maybeParamsErrors }, 400);

  const championships = champs.split(',') as Championship[];
  const startDate = new Date(start);
  const endDate = new Date(end);

  const sessions: IScheduleDay[] = getSessionsByDays(
    championships,
    startDate,
    endDate
  );

  return c.json(sessions, 200);
};
