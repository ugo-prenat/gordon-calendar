export interface IF1PromotionsResponse {
  SeasonId: number;
  SeasonName: string;
  SeasonStartDate: string;
  SeasonEndDate: string;
  Races: IF1PromotionsRace[];
}

export interface IF1PromotionsRace {
  RaceId: number;
  RoundNumber: number;
  RaceStartDate: string;
  RaceEndDate: string;
  CircuitId: number;
  CountryCode: string;
  CountryName: string;
  CircuitName: string;
  CircuitShortName: string;
  Provisional: boolean;
  Sessions: IF1PromotionsSession[];
  State: string;
  CountryFlagImagePath: string;
  CircuitImagePath: string;
}

export interface IF1PromotionsSession {
  SessionId: number;
  SessionCode: string;
  SessionName: string;
  SessionShortName: string;
  Unconfirmed: boolean;
  SessionStartTime: string;
  SessionEndTime: string;
  HideSessionResult: boolean;
  SessionResultsAvailable: boolean;
  WinnerId: number;
  WinnerName: string;
  WinnerFullName: string;
  WinnerTLA: string;
  WinnerImagePath?: string;
}
