/**
 * Small embroidered details used around the site: sampler icons, a sewing
 * needle, a dressmaker's pin and the loop on a sewn-in label. All original
 * inline SVG and decorative (aria-hidden).
 */

const base = {
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export type SamplerIcon = "coordinator" | "compensation" | "privacy" | "worldwide";

/** 56×56 icons drawn as if sewn: dotted / dashed thread and French knots. */
export function StitchIcon({ name, className }: { name: SamplerIcon; className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className ?? "size-14"} {...base}>
      {name === "coordinator" && (
        <g>
          {/* speech bubble with a heart knot inside */}
          <path
            d="M10 14 C 10 10, 13 8, 17 8 H 40 C 44 8, 47 10, 47 14 V 31 C 47 35, 44 37, 40 37 H 24 L 14 46 L 16 37 C 12 37, 10 35, 10 31 Z"
            stroke="var(--thread)"
            strokeWidth="2.6"
            strokeDasharray="4 3.4"
          />
          <path
            d="M28.5 30 C 22 26, 21 21, 24 19.5 C 26 18.5, 28 19.6, 28.5 21.5 C 29 19.6, 31 18.5, 33 19.5 C 36 21, 35 26, 28.5 30 Z"
            fill="var(--knot)"
          />
        </g>
      )}
      {name === "compensation" && (
        <g>
          {/* a sewn label/tag with its eyelet */}
          <path
            d="M8 22 L 22 8 H 46 V 32 L 32 46 Z"
            stroke="var(--sage-deep)"
            strokeWidth="2.6"
            strokeDasharray="4 3.4"
          />
          <circle cx="38" cy="16" r="3.4" stroke="var(--sage-deep)" strokeWidth="2.4" />
          <path d="M19 31 L 30 20 M23 35 L 34 24" stroke="var(--thread)" strokeWidth="2.6" />
          <circle cx="15" cy="44" r="3" fill="var(--knot)" />
        </g>
      )}
      {name === "privacy" && (
        <g>
          {/* padlock */}
          <path
            d="M18 25 V 18 C 18 12, 22.5 8, 28 8 C 33.5 8, 38 12, 38 18 V 25"
            stroke="var(--sage-deep)"
            strokeWidth="2.6"
            strokeDasharray="4 3.4"
          />
          <rect
            x="11"
            y="25"
            width="34"
            height="23"
            rx="5"
            stroke="var(--thread)"
            strokeWidth="2.6"
            strokeDasharray="4 3.4"
          />
          <circle cx="28" cy="35" r="3.6" fill="var(--knot)" />
          <path d="M28 38.5 V 43" stroke="var(--ink)" strokeWidth="2.4" />
        </g>
      )}
      {name === "worldwide" && (
        <g>
          {/* globe */}
          <circle
            cx="28"
            cy="28"
            r="19"
            stroke="var(--thread)"
            strokeWidth="2.6"
            strokeDasharray="4 3.4"
          />
          <ellipse
            cx="28"
            cy="28"
            rx="8.5"
            ry="19"
            stroke="var(--sage-deep)"
            strokeWidth="2.2"
            strokeDasharray="3 3"
          />
          <path
            d="M10 22 H 46 M10 34 H 46"
            stroke="var(--sage-deep)"
            strokeWidth="2.2"
            strokeDasharray="3 3"
          />
          <circle cx="40" cy="13" r="3.2" fill="var(--knot)" />
        </g>
      )}
    </svg>
  );
}

/** A sewing needle with a short tail of thread, pointing right. */
export function Needle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 24" className={className ?? "h-6 w-16"} {...base}>
      <path d="M2 14 C 8 22, 14 4, 20 12" stroke="var(--thread)" strokeWidth="2" />
      <path d="M20 12 H 60" stroke="var(--ink)" strokeWidth="2.4" />
      <path d="M60 12 L 63 12" stroke="var(--ink)" strokeWidth="1.2" />
      <ellipse cx="25.5" cy="12" rx="3.4" ry="1.3" stroke="#fffaf2" strokeWidth="1.1" />
    </svg>
  );
}

/** A dressmaker's pin with a round mustard head, pinned at an angle. */
export function Pin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 56" className={className ?? "h-14 w-10"} {...base}>
      <path d="M20 18 L 30 52" stroke="#8d7f78" strokeWidth="2.2" />
      <circle cx="18" cy="13" r="10" fill="var(--knot)" />
      <circle cx="15" cy="10" r="3" fill="#f6dc96" />
      <path d="M11 17 C 15 21, 22 21, 26 17" stroke="#b88a22" strokeWidth="1.4" />
    </svg>
  );
}

/** The little loop of ribbon sewn to the top of a clothing label. */
export function TagLoop({ className, color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 48 40" className={className ?? "h-10 w-12"} {...base}>
      <path d="M12 40 C 8 18, 16 4, 24 4 C 32 4, 40 18, 36 40" stroke={color} strokeWidth="5" />
      <path
        d="M14.5 38 C 11.5 20, 18 8.5, 24 8.5 C 30 8.5, 36.5 20, 33.5 38"
        stroke="#fffaf2"
        strokeWidth="1.2"
        strokeDasharray="2.5 2.5"
      />
    </svg>
  );
}

/** A row of tiny cross stitches, used as a sampler border. */
export function CrossStitchRow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        height: 12,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='12'%3E%3Cpath d='M3 2l8 8M11 2l-8 8' stroke='%23c0485b' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M15 2l8 8M23 2l-8 8' stroke='%238aa37f' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\")",
        backgroundRepeat: "round no-repeat",
        backgroundSize: "24px 12px",
      }}
    />
  );
}
