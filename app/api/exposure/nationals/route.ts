import { NextResponse } from "next/server";
import { buildNationalsHub } from "@/lib/nationalsHub";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await buildNationalsHub();
    return NextResponse.json(data, {
      headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
    });
  } catch {
    return NextResponse.json({ error: "Failed to load Nationals hub" }, { status: 502 });
  }
}
