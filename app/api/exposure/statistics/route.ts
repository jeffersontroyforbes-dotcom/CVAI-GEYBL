import { NextResponse } from "next/server";
import {
  EXPOSURE_14U_DIVISION_ID,
  EXPOSURE_STATISTICS_URL,
  type ExposureStatisticsResponse,
} from "@/lib/exposure";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(EXPOSURE_STATISTICS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `divisionId=${EXPOSURE_14U_DIVISION_ID}`,
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Exposure statistics unavailable" }, { status: 502 });
    }

    const data = (await response.json()) as ExposureStatisticsResponse;

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to load statistics" }, { status: 502 });
  }
}
