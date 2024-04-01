import {
  CHAMPIONSHIPS,
  MOTORSPORT_CHAMPIONSHIPS,
  SPORTS_TYPES
} from '@repo/constants';

export type SportType = (typeof SPORTS_TYPES)[number];
export type MotorsportChampionship = (typeof MOTORSPORT_CHAMPIONSHIPS)[number];
export type Championship = (typeof CHAMPIONSHIPS)[number];

export interface IEvent {
  id: number;
  sportType: SportType;
}

export interface IMotorsportEvent extends IEvent {
  championship: MotorsportChampionship;
  championshipId: number;
  championshipName: string;
  sessions: ISession[];
  circuit: ICircuit;
  country: ICountry;
}

export interface IScheduleSession {
  eventId: string;
  sportType: SportType;
  championship: Championship;
  name: string;
  shortname: string;
  startTime: string;
  endTime: string;
  sessionEndsTomorrow: boolean;
  sessionStartedYesterday: boolean;
}

export interface IScheduleDay {
  date: string;
  sessions: IScheduleSession[][];
}

export interface ISession {
  id: number;
  name: string;
  shortname: string;
  code?: string;
  startTime: string;
  endTime: string;
  results: IResult[];
}

export interface ICircuit {
  name: string;
  id?: number;
  shortname?: string;
  imagePath?: string;
}

export interface ICountry {
  code: string;
  name: string;
  flagImagePath?: string;
}

export interface IResult {
  driverId: number;
  driverName: string;
  driverFullName?: string;
  driverTLA?: string;
  driverImagePath?: string;
}
