const EXPOSURE_HOME = "https://basketball.exposureevents.com";

type ExposureAttributionProps = {
  /** Dark surfaces (footer) vs light page sections */
  tone?: "light" | "dark";
  className?: string;
};

/** Subtle required-style credit for Exposure data / visual content. */
export function ExposureAttribution({
  tone = "light",
  className = "",
}: ExposureAttributionProps) {
  const color =
    tone === "dark"
      ? "text-white/35 hover:text-white/50"
      : "text-muted/80 hover:text-muted";

  return (
    <p
      className={`text-[9px] font-medium tracking-[0.04em] sm:text-[10px] ${className}`}
    >
      <a
        href={EXPOSURE_HOME}
        target="_blank"
        rel="noopener noreferrer"
        className={`${color} transition`}
      >
        Powered by Exposure Basketball Events
      </a>
    </p>
  );
}
