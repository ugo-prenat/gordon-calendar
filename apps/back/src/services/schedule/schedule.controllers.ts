import { Context } from 'hono';

export const getSchedule = (c: Context) => {
  return c.json({ good: true }, 200);
};
