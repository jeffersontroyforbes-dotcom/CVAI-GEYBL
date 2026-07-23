import { NextResponse } from "next/server";
import {
  EXPOSURE_14U_DIVISION_ID,
  EXPOSURE_EVENT_ID,
  EXPOSURE_STATISTICS_WIDGET_URL,
  type ExposureStatisticsResponse,
} from "@/lib/exposure";
import { exposureApiGet, mapOfficialStatistics } from "@/lib/exposureServer";

export const dynamic = "force-dynamic";

async function fetchViaOfficialApi(): Promise<ExposureStatisticsResponse | null> {
  const payload = await exposureApiGet(
    "/api/v1/statistics",
    `?eventid=${EXPOSURE_EVENT_ID}&divisionid=${EXPOSURE_14U_DIVISION_ID}&pagesize=50&categories=ppg,rpg,apg,spg,bpg,tpg`,
  );
  if (!payload) return null;
  const mapped = mapOfficialStatistics(payload);
  // Empty successful responses should fall through to widget fallback.
  if (!mapped.HasStatistics) return null;
  return mapped;
}

async function fetchViaWidget(): Promise<ExposureStatisticsResponse> {
  const response = await fetch(EXPOSURE_STATISTICS_WIDGET_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `divisionId=${EXPOSURE_14U_DIVISION_ID}`,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Exposure widget statistics unavailable");
  }

  return (await response.json()) as ExposureStatisticsResponse;
}

export async function GET() {
  try {
    let data = await fetchViaOfficialApi();
    if (!data) {
      data = await fetchViaWidget();
    }

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to load statistics" }, { status: 502 });
  }
}
