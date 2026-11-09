import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const alt = `${SITE.brand} — ${SITE.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GOLD = "#A8834A";
const IVORY = "#FAF8F3";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#121212",
        padding: 28,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: `1px solid ${GOLD}`,
          color: IVORY,
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: 150,
            border: `2px solid ${GOLD}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 132,
              height: 132,
              borderRadius: 132,
              border: `1px solid ${GOLD}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
              fontFamily: "serif",
              color: IVORY,
            }}
          >
            DS
          </div>
        </div>
        <div style={{ marginTop: 44, fontSize: 52, letterSpacing: 16, textTransform: "uppercase" }}>
          {SITE.brand}
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: 26 }}>
          <div style={{ width: 80, height: 1, background: GOLD }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#C4A46E",
              margin: "0 24px",
            }}
          >
            {SITE.subtitle}
          </div>
          <div style={{ width: 80, height: 1, background: GOLD }} />
        </div>
        <div style={{ marginTop: 34, fontSize: 32, fontStyle: "italic", color: "#B5AEA2" }}>
          {SITE.tagline}
        </div>
      </div>
    </div>,
    size,
  );
}
