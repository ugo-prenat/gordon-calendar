import {
  F1Promotions,
  ICountry,
  IMotorsportEvent,
  IResult,
  ISession
} from '@repo/models';
import { ICircuit } from '@repo/models';
import {
  IF1PromotionsRace,
  IF1PromotionsResponse,
  IF1PromotionsSession
} from './f1Promotions.models';

export const formatF1PromotionsResponse =
  (promotion: F1Promotions) =>
  (data: IF1PromotionsResponse): IMotorsportEvent[] => {
    const { SeasonId, SeasonName } = data;

    return data.Races.map((race) => {
      const { RaceId, Sessions, RaceStartDate, RaceEndDate } = race;

      return {
        id: String(RaceId),
        endDate: RaceEndDate,
        startDate: RaceStartDate,
        sportType: 'motorsport',
        championship: promotion,
        championshipId: SeasonId,
        championshipName: SeasonName,
        circuit: makeF1PromotionsCircuit(race),
        country: makeF1PromotionsCountry(race),
        sessions: makeF1PromotionsSessions(Sessions)
      };
    });
  };

const makeF1PromotionsSessions = (
  sessions: IF1PromotionsSession[]
): ISession[] =>
  sessions.map((session) => {
    const {
      SessionCode,
      SessionEndTime,
      SessionName,
      SessionShortName,
      SessionStartTime
    } = session;

    return {
      name: SessionName,
      code: SessionCode,
      endTime: SessionEndTime,
      startTime: SessionStartTime,
      shortname: SessionShortName,
      results: makeF1PromotionsResults(session)
    };
  });

const makeF1PromotionsCircuit = ({
  CircuitId,
  CircuitImagePath,
  CircuitName,
  CircuitShortName
}: IF1PromotionsRace): ICircuit => ({
  id: CircuitId,
  name: CircuitName,
  shortname: CircuitShortName,
  imagePath: CircuitImagePath
});

const makeF1PromotionsCountry = ({
  CountryFlagImagePath,
  CountryCode,
  CountryName
}: IF1PromotionsRace): ICountry => ({
  code: CountryCode,
  name: CountryName,
  flagImagePath: CountryFlagImagePath
});

const makeF1PromotionsResults = ({
  SessionResultsAvailable,
  WinnerFullName,
  WinnerId,
  WinnerName,
  WinnerTLA,
  WinnerImagePath
}: IF1PromotionsSession): IResult[] =>
  SessionResultsAvailable
    ? [
        {
          driverId: WinnerId,
          driverTLA: WinnerTLA,
          driverName: WinnerName,
          driverFullName: WinnerFullName,
          driverImagePath: WinnerImagePath
        }
      ]
    : [];
