export interface IF1MeetingsListResponse {
  events: IF1MeetingEvent[];
}

export interface IF1MeetingEvent {
  type: string;
  url: string;
  thumbnail: {
    image: {
      path: string;
      url: string;
      title: string;
    };
  };
  countryFlag: string;
  circuitSmallImage: string;
  circuitMediumImage: string;
  drivers?: IF1MeetingEventDrivers[];
  meetingCountryName: string;
  meetingLocation: string;
  meetingOfficialName: string;
  meetingEndDate: string;
  meetingStartDate: string;
  meetingKey: string;
  meetingName: string;
  gmtOffset: string;
  status: string;
  roundText: string;
}

export interface IF1MeetingEventDrivers {
  driverImage: string;
  teamColourCode: string;
  driverTLA: string;
  driverLastName: string;
  driverFirstName: string;
  positionNumber: string;
  driverNameFormat: string;
}

export interface IF1Meeting {
  raceHubId: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
  fomRaceId: string;
  brandColourHexadecimal: string;
  circuitSmallImage: {
    title: string;
    path: string;
    url: string;
    public_id: string;
    raw_transformation: string;
    width: number;
    height: number;
  };
  seasonContext: {
    id: string;
    contentType: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    seasonYear: string;
    currentOrNextMeetingKey: string;
    state: string;
    eventState: string;
    liveEventId: string;
    liveTimingsSource: string;
    liveBlog: {
      contentType: string;
      title: string;
      host: string;
      projectId: string;
      eventId: string;
      eventUrl: string;
    };
    seasonState: string;
    raceListingOverride: number;
    driverAndTeamListingOverride: number;
    timetables: IF1MeetingTimetable[];
    replayBaseUrl: string;
    seasonContextUIState: number;
  };
  race: IF1MeetingRace;
  seasonYearImage: string;
  meetingContext: {
    season: string;
    meetingKey: string;
    isTestEvent: boolean;
    state: string;
    seasonState: string;
    timetables: IF1MeetingTimetable[];
  };
}

export interface IF1MeetingTimetable {
  state: string;
  session: string;
  gmtOffset: string;
  description: string;
  startTime: string;
  endTime: string;
}

export interface IF1MeetingRace {
  meetingCountryName: string;
  meetingStartDate: string;
  meetingOfficialName: string;
  meetingEndDate: string;
}
