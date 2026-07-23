import { createHmac } from "crypto";
import {
  EXPOSURE_EVENT_ID,
  EXPOSURE_HOST,
  type ExposureStatCategory,
  type ExposureStatLeader,
  type ExposureStatisticsResponse,
} from "./exposure";

function getCredentials() {
  const apiKey = process.env.EXPOSURE_API_KEY;
  const secret = process.env.EXPOSURE_API_SECRET;
  if (!apiKey || !secret) return null;
  return { apiKey, secret };
}

/** HMAC-SHA256 signed auth for Exposure official API. */
export function buildExposureAuth(verb: string, relativeUri: string) {
  const creds = getCredentials();
  if (!creds) return null;

  const timestamp = new Date().toISOString();
  const message = `${creds.apiKey}&${verb}&${timestamp}&${relativeUri}`.toUpperCase();
  const signature = createHmac("sha256", creds.secret).update(message).digest("base64");

  return {
    timestamp,
    authentication: `${creds.apiKey}.${signature}`,
  };
}

export async function exposureApiGet(relativeUri: string, query = "") {
  const auth = buildExposureAuth("GET", relativeUri);
  if (!auth) return null;

  const response = await fetch(`${EXPOSURE_HOST}${relativeUri}${query}`, {
    headers: {
      Timestamp: auth.timestamp,
      Authentication: auth.authentication,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Exposure API ${response.status}`);
  }

  return response.json();
}

const CATEGORY_ABBR: Record<string, string> = {
  "Points Per Game": "PPG",
  "Rebounds Per Game": "RPG",
  "Assists Per Game": "APG",
  "Steals Per Game": "SPG",
  "Blocks Per Game": "BPG",
  "Blocks Per  Game": "BPG",
  "Turnovers Per Game": "TPG",
};

/** Map official API statistics payload into the UI leaderboard shape. */
export function mapOfficialStatistics(
  payload: {
    Players?: {
      Statistics?: Array<{
        Name: string;
        Participants?: Array<{
          FirstName?: string;
          LastName?: string;
          Name?: string;
          Value?: number;
          PlayerId?: number;
          TeamName?: string;
        }>;
      }>;
    };
  },
  eventId = EXPOSURE_EVENT_ID,
): ExposureStatisticsResponse {
  const categories = payload.Players?.Statistics ?? [];
  const summaries: ExposureStatCategory[] = categories.map((cat) => {
    const abbr = CATEGORY_ABBR[cat.Name] ?? cat.Name.slice(0, 3).toUpperCase();
    const value: ExposureStatLeader[] = (cat.Participants ?? []).map((p) => {
      const name =
        p.Name ||
        [p.FirstName?.[0] ? `${p.FirstName[0]}.` : "", p.LastName].filter(Boolean).join(" ").trim() ||
        "—";
      const display = p.Value == null ? "—" : Number(p.Value).toFixed(1);
      return {
        Name: name,
        Display: display,
        PlayerUrl: `/widgets/v1/player?eventid=${eventId}&playerid=${p.PlayerId ?? ""}`,
        TeamName: p.TeamName ?? "",
      };
    });

    return { Abbr: abbr, Name: cat.Name, Value: value };
  });

  return {
    HasStatistics: summaries.some((s) => s.Value.length > 0),
    StatisticSummaries: summaries,
  };
}
