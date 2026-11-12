import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const alt = `${SITE.brand} — ${SITE.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LINEN = "#F6EFE2";
const FABRIC = "#FFFAF2";
const INK = "#3C2A2A";
const THREAD = "#C0485B";
const SAGE = "#6B8A5E";
const MUTED = "#6B5450";

// Stitched heart + needle, drawn as inline SVG.
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M17 34 C 7.5 27, 4 20, 7.5 14.6 C 10.4 10.4, 15.4 11.2, 17 15.4 C 18.6 11.2, 23.6 10.4, 26.5 14.6 C 30 20, 26.5 27, 17 34 Z" fill="none" stroke="${THREAD}" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="3.4 2.6"/><path d="M23.5 18.5 L36 6" stroke="${INK}" stroke-width="1.6" stroke-linecap="round"/><path d="M34.6 7.4 C 38.5 10.5, 36.5 15.5, 31 15.2" fill="none" stroke="${THREAD}" stroke-width="1.1" stroke-linecap="round"/><circle cx="31" cy="30" r="2.6" fill="#E8B84A"/></svg>`;

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: LINEN,
        padding: 44,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: FABRIC,
          borderRadius: 40,
          border: `4px dashed ${THREAD}`,
          color: INK,
        }}
      >
        <img
          alt=""
          width={150}
          height={150}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(MARK)}`}
        />
        <div style={{ marginTop: 28, fontSize: 76, fontWeight: 700, color: THREAD }}>
          {SITE.brand}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: SAGE,
          }}
        >
          {SITE.subtitle}
        </div>
        <div style={{ marginTop: 30, fontSize: 36, color: MUTED }}>{SITE.tagline}</div>
      </div>
    </div>,
    size,
  );
}
