import { Context } from 'hono';
import { findParamsErrors } from './schedule.utils';
import { Championship } from '@repo/models';

export const getSchedule = (c: Context) => {
  const { champs, start, end } = c.req.query();

  const maybeParamsErrors = findParamsErrors(c);
  if (maybeParamsErrors) return c.json({ error: maybeParamsErrors }, 400);

  const championships = champs.split(',') as Championship[];
  const startDate = new Date(start);
  const endDate = new Date(end);

  return c.json({ championships, startDate, endDate }, 200);
};
