import { CHAMPIONSHIPS } from '@repo/constants';
import { Championship, IScheduleDay, IScheduleSession } from '@repo/models';
import { cleanArray, isNotEmpty } from '@repo/utils';
import { eachDayOfInterval, isBefore, isValid } from 'date-fns';
import { Context } from 'hono';

export const findParamsErrors = (c: Context): string | undefined => {
  const { champs, start, end, ...rest } = c.req.query();

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (isNotEmpty(rest))
    return 'Allowed query params: champs, start, end. No extra params allowed.';

  if (!champs) return "Missing 'champs' query param.";
  if (!start) return "Missing 'start' query param.";
  if (!end) return "Missing 'end' query param.";

  if (!isChampsValid(champs))
    return `Invalid 'champs' query param. Allowed values: ${CHAMPIONSHIPS.join(', ')}`;

  if (!isValid(startDate))
    return "Invalid 'start' query param. Must be a valid date.";
  if (!isValid(endDate))
    return "Invalid 'end' query param. Must be a valid date.";

  if (isBefore(endDate, startDate))
    return 'start date must be before end date.';

  return undefined;
};

const isChampsValid = (champs: string): boolean =>
  cleanArray(champs.split(',')).length !== 0 &&
  cleanArray(champs.split(',')).every((champ) => CHAMPIONSHIPS.includes(champ));

export const getSessionsByDays = (
  champs: Championship[],
  start: Date,
  end: Date
): IScheduleDay[] =>
  eachDayOfInterval({ start, end }).map((date) => ({
    date: date.toISOString(),
    sessions: getSessionsOfTheDay(champs, date)
  }));

const getSessionsOfTheDay = (
  champs: Championship[],
  date: Date
): IScheduleSession[][] => {
  return [[]];
};
