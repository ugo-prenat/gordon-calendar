import { CHAMPIONSHIPS } from '@repo/constants';
import {
  Championship,
  IEvent,
  IScheduleDay,
  IScheduleSession,
  ISession
} from '@repo/models';
import { cleanArray, isNotEmpty } from '@repo/utils';
import {
  addDays,
  eachDayOfInterval,
  isBefore,
  isSameDay,
  isValid,
  subDays
} from 'date-fns';
import { Context } from 'hono';
import { getFromCache } from '../../cache/cache.utils';

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
): IScheduleDay[] => {
  const cachedEvents = getEventsFromCache(champs);

  return eachDayOfInterval({ start, end }).map((date) => ({
    date: date.toISOString(),
    sessions: getSessionsOfTheDay(champs, date, cachedEvents)
  }));
};

const getEventsFromCache = (champs: Championship[]): IEvent[] => {
  const events: { [key: string]: IEvent[] } = getFromCache(champs);
  return Object.values(events).flat();
};

const getSessionsOfTheDay = (
  champs: Championship[],
  date: Date,
  events: IEvent[]
): IScheduleSession[][] => {
  const targetEvents = events.filter(({ championship }) =>
    champs.includes(championship)
  );
  const sessions: IScheduleSession[] = targetEvents.flatMap((event) =>
    event.sessions
      .filter(
        ({ startTime, endTime }) =>
          isSameDay(new Date(endTime), date) ||
          isSameDay(new Date(startTime), date)
      )
      .map((session) => buildScheduleSession(session, event, date))
  );

  return [sessions];
};

const buildScheduleSession = (
  session: ISession,
  event: IEvent,
  date: Date
): IScheduleSession => {
  const { championship, sportType } = event;
  const { name, shortname, startTime, endTime } = session;

  return {
    name,
    endTime,
    startTime,
    shortname,
    sportType,
    championship,
    sessionEndsTomorrow: isSessionEndingTomorrow(endTime, date),
    sessionStartedYesterday: didSessionStartYesterday(startTime, date)
  };
};

const isSessionEndingTomorrow = (endTime: string, date: Date): boolean =>
  isSameDay(new Date(endTime), subDays(date, 1));

const didSessionStartYesterday = (startTime: string, date: Date): boolean =>
  isSameDay(new Date(startTime), addDays(date, 1));
