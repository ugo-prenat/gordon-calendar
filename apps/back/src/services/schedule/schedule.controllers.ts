import { Context } from 'hono';

export const getSchedule = async (c: Context) => {
  return c.json({ message: 'yeah' });
};
