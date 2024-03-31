import {
  CHAMPIONSHIPS,
  MOTORSPORT_CHAMPIONSHIPS,
  SPORTS_TYPES
} from '@repo/constants';

export type SportType = (typeof SPORTS_TYPES)[number];
export type MotorsportChampionship = (typeof MOTORSPORT_CHAMPIONSHIPS)[number];
export type Championship = (typeof CHAMPIONSHIPS)[number];

export interface IEvent {
  id: string;
  origin: string;
  sportType: SportType;
}

export interface IMotorsportEvent extends IEvent {
  championship: MotorsportChampionship;
  sessions: ISession[];
  circuit: ICircuit;
  country: ICountry;
}

export interface IScheduleSession {
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
  name: string;
  shortname: string;
  startTime: string;
  endTime: string;
}

export interface ICircuit {
  name: string;
  path: string;
}

export interface ICountry {
  name: string;
  flag: string;
}
