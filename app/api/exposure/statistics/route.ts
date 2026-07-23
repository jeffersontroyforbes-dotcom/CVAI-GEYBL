import { NextResponse } from "next/server";
import { HUB_CIRCUITS, getDivision, type HubAge } from "@/lib/hubConfig";
import {
  EXPOSURE_STATISTICS_WIDGET_URL,
  type ExposureStatisticsResponse,
} from "@/lib/exposure";
import { exposureApiGet, mapOfficialStatistics } from "@/lib/exposureServer";

export const dynamic = "force-dynamic";

async function fetchViaOfficialApi(
  eventId: number,
  divisionId: number,
): Promise<ExposureStatisticsResponse | null> {
  const payload = await exposureApiGet(
    "/api/v1/statistics",
    `?eventid=${eventId}&divisionid=${divisionId}&pagesize=50&categories=ppg,rpg,apg,spg,bpg,tpg`,
  );
  if (!payload) return null;
  const mapped = mapOfficialStatistics(payload, eventId);
  if (!mapped.HasStatistics) return null;
  return mapped;
}

async function fetchViaWidget(eventId: number, divisionId: number): Promise<ExposureStatisticsResponse> {
  const url = `https://basketball.exposureevents.com/widgets/v1/statistics?id=${eventId}&categories=ppg,rpg,apg,spg,bpg,tpg`;
  const response = await fetch(url || EXPOSURE_STATISTICS_WIDGET_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `divisionId=${divisionId}`,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Exposure widget statistics unavailable");
  }

  return (await response.json()) as ExposureStatisticsResponse;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const circuitId = (searchParams.get("circuit") ?? "jr-eybl") as keyof typeof HUB_CIRCUITS;
    const age = (searchParams.get("age") ?? undefined) as HubAge | undefined;

    const circuit = HUB_CIRCUITS[circuitId] ?? HUB_CIRCUITS["jr-eybl"];
    const division = getDivision(circuit, age ?? circuit.defaultAge);

    let data = await fetchViaOfficialApi(circuit.eventId, division.divisionId);
    if (!data) {
      data = await fetchViaWidget(circuit.eventId, division.divisionId);
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
