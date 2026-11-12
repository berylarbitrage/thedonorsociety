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

// Two-thread heart mark (T12), drawn as inline SVG.
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 14 88 86"><path d="M54 92 C 18 70, 18 34, 38 28" fill="none" stroke="${THREAD}" stroke-width="3" stroke-dasharray="6 4" stroke-linecap="round"/><path d="M54 92 C 90 70, 90 34, 70 28" fill="none" stroke="${SAGE_MARK}" stroke-width="3" stroke-dasharray="6 4" stroke-linecap="round"/><ellipse cx="40" cy="28" rx="7" ry="5" fill="${THREAD}" transform="rotate(-20 40 28)"/><ellipse cx="68" cy="28" rx="7" ry="5" fill="${SAGE_MARK}" transform="rotate(20 68 28)"/><circle cx="54" cy="56" r="15.5" fill="none" stroke="#C99A35" stroke-width="1.5"/><circle cx="54" cy="56" r="12" fill="${KNOT}"/></svg>`;

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
            width={170}
            height={164}
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
