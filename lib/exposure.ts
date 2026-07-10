export const EXPOSURE_VEGAS_EVENT_ID = 256718;
export const EXPOSURE_14U_DIVISION_ID = 1439601;
export const EXPOSURE_14U_DIVISION_NAME = "14 Jr. EYBL";

export const EXPOSURE_STATISTICS_URL =
  `https://basketball.exposureevents.com/widgets/v1/statistics?id=${EXPOSURE_VEGAS_EVENT_ID}&categories=ppg,rpg,apg,spg,bpg,tpg`;

/** Widget embed URL (no division param — Exposure ignores it for this event). */
export const EXPOSURE_WIDGET_URL =
  `https://basketball.exposureevents.com/widgets/v1/statistics?eventid=${EXPOSURE_VEGAS_EVENT_ID}`;

export type ExposureStatLeader = {
  Name: string;
  Display: string;
  PlayerUrl: string;
  TeamName: string;
};

export type ExposureStatCategory = {
  Abbr: string;
  Name: string;
  Value: ExposureStatLeader[];
};

export type ExposureStatisticsResponse = {
  HasStatistics: boolean;
  StatisticSummaries: ExposureStatCategory[];
};
