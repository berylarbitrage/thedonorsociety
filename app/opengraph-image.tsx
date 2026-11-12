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

const SAGE_MARK = "#8AA37F";
const KNOT = "#E8B84A";

// Hoop-and-egg mark (T9), drawn as inline SVG.
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="6 2 96 100"><circle cx="54" cy="55" r="42" fill="${FABRIC}" stroke="#C49A6C" stroke-width="7"/><rect x="49" y="6" width="10" height="9" rx="2" fill="#A77B4F"/><circle cx="62" cy="58" r="15.5" fill="none" stroke="${THREAD}" stroke-width="3" stroke-dasharray="1 5"/><circle cx="62" cy="58" r="6" fill="${KNOT}"/><g transform="translate(40 42) rotate(30) scale(0.9)"><path d="M-6 0 C -11 -6, -16 6, -22 0 S -33 -6, -40 0" fill="none" stroke="${THREAD}" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="4 4"/><ellipse cx="0" cy="0" rx="7.5" ry="5.4" fill="${THREAD}"/></g></svg>`;

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
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            alt=""
            width={168}
            height={175}
            src={`data:image/svg+xml;utf8,${encodeURIComponent(MARK)}`}
          />
          <div
            style={{
              marginLeft: 28,
              paddingBottom: 14,
              fontSize: 76,
              fontWeight: 700,
              color: THREAD,
              borderBottom: `5px dashed ${SAGE_MARK}`,
            }}
          >
            {SITE.brand}
          </div>
        </div>
        <div
          style={{
            marginTop: 30,
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
