import { Context } from 'hono';
import { findParamsErrors, getSessionsByDays } from './schedule.utils';
import { Championship } from '@repo/models';

export const getSchedule = (c: Context) => {
  const { champs, start, end } = c.req.query();

  const maybeParamsErrors = findParamsErrors(c);
  if (maybeParamsErrors) return c.json({ error: maybeParamsErrors }, 400);

  const championships = champs.split(',') as Championship[];
  const startDate = new Date(start);
  const endDate = new Date(end);

  // format(new Date(start), 'dd/MM/yyyy');

  const sessions = getSessionsByDays(championships, startDate, endDate);

  return c.json({ championships, startDate, endDate, sessions }, 200);
};
