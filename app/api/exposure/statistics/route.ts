import { NextResponse } from "next/server";
import {
  EXPOSURE_14U_DIVISION_ID,
  EXPOSURE_STATISTICS_URL,
  type ExposureStatisticsResponse,
} from "@/lib/exposure";

export const revalidate = 60;

export async function GET() {
  try {
    const response = await fetch(EXPOSURE_STATISTICS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `divisionId=${EXPOSURE_14U_DIVISION_ID}`,
      next: { revalidate },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Exposure statistics unavailable" }, { status: 502 });
    }

    const data = (await response.json()) as ExposureStatisticsResponse;

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to load statistics" }, { status: 502 });
  }
}
