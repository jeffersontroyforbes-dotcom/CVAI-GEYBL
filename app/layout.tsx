import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { EmbedDetect } from "@/components/EmbedDetect";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CVAI · GEYBL Stats Hub",
  description:
    "14U GEYBL coverage, live leaders, and matchup intel — powered by CourtVision AI.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-dvh overflow-x-clip bg-matte font-sans text-ink">
        <EmbedDetect />
        {children}
      </body>
    </html>
  );
}
