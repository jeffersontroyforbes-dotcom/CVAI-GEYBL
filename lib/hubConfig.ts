export type HubAge = "17" | "16" | "15" | "14";

export type HubDivisionConfig = {
  age: HubAge;
  label: string;
  divisionId: number;
  divisionName: string;
};

export type HubCircuitConfig = {
  id: "jr-eybl" | "eybl" | "eycl";
  name: string;
  shortName: string;
  eventId: number;
  eventLabel: string;
  /** Poster image. Omit to use typographic banner (no AI logo art). */
  heroSrc?: string;
  heroAlt?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroLeague?: string;
  heroYear?: string;
  /** Official circuit mark only — never AI-generated. */
  logoSrc?: string;
  logoAlt?: string;
  path: string;
  ages: HubDivisionConfig[];
  defaultAge: HubAge;
};

export const HUB_CIRCUITS: Record<HubCircuitConfig["id"], HubCircuitConfig> = {
  "jr-eybl": {
    id: "jr-eybl",
    name: "Jr. EYBL",
    shortName: "14U",
    eventId: 272825,
    eventLabel: "Nike Nationals · Jr. EYBL · Chicago",
    heroSrc: "/cvai-chicago-hero.png",
    heroAlt: "EYBL Chicago — CourtVision AI Coverage 2026 Nike Nationals Jr. EYBL",
    logoSrc: "/logos/eybl-logo.png",
    logoAlt: "Nike EYBL",
    path: "/",
    defaultAge: "14",
    ages: [
      {
        age: "14",
        label: "14U",
        divisionId: 1459833,
        divisionName: "14 Jr. EYBL",
      },
    ],
  },
  eybl: {
    id: "eybl",
    name: "EYBL",
    shortName: "EYBL",
    eventId: 256054,
    eventLabel: "Nike Nationals · EYBL · Chicago",
    heroSrc: "/cvai-eybl-hero.png",
    heroAlt: "EYBL Chicago — Nike Elite Youth Basketball League 2026",
    logoSrc: "/logos/eybl-logo.png",
    logoAlt: "Nike EYBL",
    path: "/eybl",
    defaultAge: "17",
    ages: [
      { age: "17", label: "17U", divisionId: 1283812, divisionName: "17 EYBL" },
      { age: "16", label: "16U", divisionId: 1283813, divisionName: "16 EYBL" },
      { age: "15", label: "15U", divisionId: 1283814, divisionName: "15 EYBL" },
    ],
  },
  eycl: {
    id: "eycl",
    name: "EYCL",
    shortName: "EYCL",
    eventId: 272747,
    eventLabel: "Nike Nationals · EYCL · Chicago",
    // No AI poster / no AI logo — typographic banner only until official assets land
    heroTitle: "EYCL",
    heroSubtitle: "Chicago",
    heroLeague: "Nike Elite Youth Championship League",
    heroYear: "2026",
    path: "/eycl",
    defaultAge: "17",
    ages: [
      {
        age: "17",
        label: "17U",
        divisionId: 1459690,
        divisionName: "17 EYBL Champions League",
      },
      {
        age: "16",
        label: "16U",
        divisionId: 1459691,
        divisionName: "16 EYBL Champions League",
      },
      {
        age: "15",
        label: "15U",
        divisionId: 1459692,
        divisionName: "15 EYBL Champions League",
      },
    ],
  },
};

export function getDivision(
  circuit: HubCircuitConfig,
  age: HubAge = circuit.defaultAge,
): HubDivisionConfig {
  return circuit.ages.find((a) => a.age === age) ?? circuit.ages[0];
}

export function stripDivisionSuffix(teamName: string, divisionName: string) {
  if (!teamName) return "";
  const escaped = divisionName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return teamName.replace(new RegExp(`\\s*${escaped}\\s*$`), "").trim();
}
