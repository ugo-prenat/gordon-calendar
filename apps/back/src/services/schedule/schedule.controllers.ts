import { Context } from 'hono';
import { findParamsErrors, getSessionsByDays } from './schedule.utils';
import { Championship } from '@repo/models';
import { format } from 'date-fns';

export const getSchedule = (c: Context) => {
  const { champs, start, end } = c.req.query();

  const maybeParamsErrors = findParamsErrors(c);
  if (maybeParamsErrors) return c.json({ error: maybeParamsErrors }, 400);

  const championships = champs.split(',') as Championship[];
  const startDate = new Date(start);
  const endDate = new Date(end);

  const sessions = getSessionsByDays(championships, startDate, endDate);

  return c.json(
    {
      startDate: format(startDate, 'dd/MM/yyyy'),
      endDate: format(endDate, 'dd/MM/yyyy'),
      sessions
    },
    200
  );
};
