import { IMotorsportEvent, IResult, ISession } from '@repo/models';
import {
  IF1Meeting,
  IF1MeetingEvent,
  IF1MeetingEventDrivers,
  IF1MeetingTimetable
} from './f1.models';

export const formatF1Meetings = (
  meetings: { meeting: IF1Meeting; rawEvent: IF1MeetingEvent }[]
): IMotorsportEvent[] =>
  meetings.map(({ meeting, rawEvent }) => {
    const {
      fomRaceId,
      seasonContext: { timetables },
      race: { meetingOfficialName, meetingEndDate, meetingStartDate }
    } = meeting;

    const {
      meetingName,
      meetingLocation,
      circuitMediumImage,
      meetingCountryName,
      drivers
    } = rawEvent;

    return {
      id: fomRaceId,
      sportType: 'motorsport',
      championship: 'f1',
      championshipName: 'FIA Formula One World Championship',
      eventName: meetingOfficialName,
      eventShortName: meetingName,
      startDate: meetingStartDate,
      endDate: meetingEndDate,
      sessions: makeF1Sessions(timetables, drivers || []),
      circuit: {
        name: meetingLocation,
        imagePath: circuitMediumImage
      },
      country: {
        name: meetingCountryName
      }
    };
  });

const makeF1Sessions = (
  timetables: IF1MeetingTimetable[],
  drivers: IF1MeetingEventDrivers[]
): ISession[] =>
  timetables.map(({ description, endTime, session, startTime }) => ({
    name: description,
    shortname: session,
    startTime,
    endTime,
    results: makeResults(drivers)
  }));

const makeResults = (drivers: IF1MeetingEventDrivers[]): IResult[] =>
  drivers.map(
    ({ driverFirstName, driverLastName, driverTLA, driverImage }) => ({
      driverTLA,
      driverImage,
      driverName: driverLastName,
      driverFullName: `${driverFirstName} ${driverLastName}`
    })
  );
