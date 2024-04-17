import {
  addDays,
  addWeeks,
  endOfWeek,
  isFriday,
  isSaturday,
  isSunday,
  nextFriday,
  startOfToday,
  startOfWeek,
  subDays
} from 'date-fns';
import { IDateRange, IDayView } from './calendar.models';

export const getCalendarRange = (
  dayView: IDayView,
  index: number
): IDateRange => {
  const todayRange = getDateRange(dayView);
  return {
    from: addWeeks(todayRange.from, index),
    to: addWeeks(todayRange.to, index)
  };
};

export const getDateRange = (dayView: IDayView): IDateRange => {
  const today = startOfToday();

  switch (dayView) {
    case 'weekend':
      return {
        from: getFirstDayOfNextWeekend(),
        to: addDays(getFirstDayOfNextWeekend(), 2)
      };
    case 'week':
      return {
        from: startOfWeek(today, { weekStartsOn: 1 }),
        to: endOfWeek(today, { weekStartsOn: 1 })
      };
  }
};

const getFirstDayOfNextWeekend = (): Date => {
  const today = startOfToday();

  if (isFriday(today)) return today;
  if (isSaturday(today)) return subDays(today, 1);
  if (isSunday(today)) return subDays(today, 2);
  return nextFriday(today);
};
