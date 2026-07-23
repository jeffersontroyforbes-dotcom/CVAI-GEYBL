/** Active event: Nike Nationals - Jr. EYBL (Chicago) */
export const EXPOSURE_EVENT_ID = Number(process.env.EXPOSURE_EVENT_ID ?? 272825);
export const EXPOSURE_14U_DIVISION_ID = 1459833;
export const EXPOSURE_14U_DIVISION_NAME = "14 Jr. EYBL";
export const EXPOSURE_EVENT_LABEL = "Nike Nationals · Chicago";

/** Archived sessions (kept for reference / future archive UI) */
export const EXPOSURE_VEGAS_EVENT_ID = 256718;
export const EXPOSURE_VEGAS_14U_DIVISION_ID = 1439601;

export const EXPOSURE_HOST = "https://basketball.exposureevents.com";

/** Legacy widget endpoint (fallback if official API keys are missing). */
export const EXPOSURE_STATISTICS_WIDGET_URL = `https://basketball.exposureevents.com/widgets/v1/statistics?id=${EXPOSURE_EVENT_ID}&categories=ppg,rpg,apg,spg,bpg,tpg`;

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
