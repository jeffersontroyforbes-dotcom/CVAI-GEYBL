import { NextResponse } from "next/server";
import { HUB_CIRCUITS, getDivision, type HubAge } from "@/lib/hubConfig";
import { buildNationalsHub } from "@/lib/nationalsHub";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const circuitId = (searchParams.get("circuit") ?? "jr-eybl") as keyof typeof HUB_CIRCUITS;
    const age = (searchParams.get("age") ?? undefined) as HubAge | undefined;

    const circuit = HUB_CIRCUITS[circuitId] ?? HUB_CIRCUITS["jr-eybl"];
    const division = getDivision(circuit, age ?? circuit.defaultAge);

    const data = await buildNationalsHub({
      eventId: circuit.eventId,
      divisionId: division.divisionId,
      divisionName: division.divisionName,
    });

    return NextResponse.json(data, {
      headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
    });
  } catch {
    return NextResponse.json({ error: "Failed to load hub" }, { status: 502 });
  }
}
