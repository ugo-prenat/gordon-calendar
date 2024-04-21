import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import {
  CALENDAR_STORAGE_KEY,
  CalendarView,
  DayView,
  IDateRange
} from '@src/pages/calendar/calendar.models';
import {
  DEFAULT_CALENDAR_VIEW,
  WEEK_CALENDAR_VIEW,
  WEEKEND_CALENDAR_VIEW
} from '@src/constants';
import { getCalendarRange } from '@src/pages/calendar/calendar.utils';
import { Championship } from '@repo/models';
import { DEFAULT_CHAMPIONSHIPS } from '@repo/constants';

interface ICalendarStore {
  rangeIndex: string;
  setRangeIndex: (index: string) => void;
  view: CalendarView;
  setView: (view: CalendarView) => void;
  range: IDateRange;
  setRange: (range: IDateRange) => void;
  setRangeAndIndex: (range: IDateRange, rangeIndex: string) => void;
  championships: Championship[];
  setChampionships: (championships: Championship[]) => void;
}

const getDefaultRange = (calendarView: CalendarView) => {
  const dayView: DayView = [WEEK_CALENDAR_VIEW, WEEKEND_CALENDAR_VIEW].includes(
    calendarView
  )
    ? (calendarView as DayView)
    : WEEKEND_CALENDAR_VIEW;

  return getCalendarRange(dayView, 0);
};

export const useCalendar = create<ICalendarStore>()(
  devtools(
    persist(
      (set) => ({
        rangeIndex: '0',
        setRangeIndex: (index) => set({ rangeIndex: index }),
        view: DEFAULT_CALENDAR_VIEW,
        setView: (view) => set({ view }),
        range: getDefaultRange(DEFAULT_CALENDAR_VIEW),
        setRange: (range) => set({ range }),
        setRangeAndIndex: (range, rangeIndex) => set({ range, rangeIndex }),
        championships: DEFAULT_CHAMPIONSHIPS as Championship[],
        setChampionships: (championships) => set({ championships })
      }),
      {
        name: CALENDAR_STORAGE_KEY,
        partialize: ({ view, championships }) => ({ view, championships })
      }
    )
  )
);
