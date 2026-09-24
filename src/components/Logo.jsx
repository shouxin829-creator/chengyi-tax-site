import { site } from "../config/site";

export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src="/images/logo-256.png"
        alt=""
        width="36"
        height="42"
        className="h-10 w-auto drop-shadow-sm"
      />
      <span className="leading-tight">
        <span
          className={`block text-[15px] font-bold tracking-wide sm:text-base ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {site.brand}
        </span>
        <span
          className={`block text-[9px] font-semibold tracking-[0.2em] ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          {site.brandEn}
        </span>
      </span>
    </span>
  );
}
