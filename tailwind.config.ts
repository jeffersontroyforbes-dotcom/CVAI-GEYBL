import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#ffffff",
        /** Page field behind white cards — not named `canvas` (Tailwind preflight / HTML conflict). */
        matte: "#fafafa",
        muted: "#4a4844",
        dim: "#5c5a55",
        line: "#d0d0cc",
        panel: "#e8e8e5",
        gold: {
          DEFAULT: "#d4af37",
          bright: "#f0dc82",
          deep: "#4a3a0a",
          soft: "#f8efd4",
        },
      },
      fontFamily: {
        headline: ["var(--font-headline)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 16px 48px -10px rgba(0,0,0,0.28), 0 8px 20px -8px rgba(0,0,0,0.18)",
        liftLg:
          "0 28px 64px -14px rgba(0,0,0,0.34), 0 12px 28px -10px rgba(0,0,0,0.22)",
        liftCard:
          "0 24px 60px -12px rgba(0,0,0,0.32), 0 10px 24px -8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.95)",
        insetGold: "inset 0 1px 0 rgba(240,220,130,0.65)",
        glowGold: "0 0 36px -4px rgba(212,175,55,0.55), 0 0 80px -20px rgba(240,220,130,0.22)",
        glowGoldSoft: "0 0 28px -6px rgba(212,175,55,0.4)",
        heroGoldRing:
          "0 0 0 1px rgba(212,175,55,0.35), 0 0 48px -8px rgba(212,175,55,0.45), 0 24px 56px -12px rgba(0,0,0,0.45)",
        navDepth:
          "0 8px 32px -4px rgba(0,0,0,0.65), inset 0 -1px 0 rgba(255,255,255,0.06)",
        cardInner: "inset 0 1px 0 rgba(255,255,255,0.96), 0 1px 0 rgba(0,0,0,0.08)",
      },
      keyframes: {
        "shimmer-slide": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        "shimmer-slide": "shimmer-slide 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
