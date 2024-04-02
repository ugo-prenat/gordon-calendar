import { IMotorsportEvent } from '@repo/models';
import { F1_BASE_API_URL } from '../../constants';
import { fetcher } from '../../utils/fetcher';
import {
  IF1Meeting,
  IF1MeetingEvent,
  IF1MeetingsListResponse
} from './f1.models';
import { formatF1Meetings } from './f1.utils';

export const f1Fetcher = <T>(url: string, init?: RequestInit): Promise<T> =>
  fetcher['GET'](`${F1_BASE_API_URL}${url}`, {
    headers: { apiKey: process.env.F1_API_KEY, locale: 'en', ...init?.headers },
    ...init
  });

export const getF1Races = (): Promise<IMotorsportEvent[]> =>
  getF1MeetingsList().then(({ events }) =>
    Promise.all(events.map(getF1Meeting)).then(formatF1Meetings)
  );

const getF1MeetingsList = () =>
  f1Fetcher<IF1MeetingsListResponse>('/editorial-eventlisting/events');

const getF1Meeting = (
  rawEvent: IF1MeetingEvent
): Promise<{ meeting: IF1Meeting; rawEvent: IF1MeetingEvent }> =>
  f1Fetcher<IF1Meeting>(`/event-tracker/meeting/${rawEvent.meetingKey}`).then(
    (meeting) => ({ meeting, rawEvent })
  );
