/**
 * Engraving-style emblems for the hero: a fine guilloché ring around a central
 * figure (the monogram, an ovum, or a single flowing line). Inline SVG, no
 * external requests. Purely decorative.
 */
export function HeroArt({
  variant,
  className,
}: {
  variant: "home" | "egg" | "sperm";
  className?: string;
}) {
  const ticks = Array.from({ length: 72 }, (_, i) => i * 5);
  return (
    <svg
      viewBox="0 0 200 200"
      className={className ?? "mx-auto size-40 md:size-48"}
      aria-hidden
      fill="none"
    >
      {/* guilloché ring */}
      <circle cx="100" cy="100" r="97" stroke="var(--gold)" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="86" stroke="var(--gold)" strokeWidth="0.4" />
      {ticks.map((deg) => (
        <line
          key={deg}
          x1="100"
          y1="5.5"
          x2="100"
          y2={deg % 15 === 0 ? 13 : 10}
          stroke="var(--gold)"
          strokeWidth="0.5"
          transform={`rotate(${deg} 100 100)`}
        />
      ))}

      {variant === "home" && (
        <g>
          <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="0.3" />
          <text
            x="100"
            y="117"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            className="font-serif"
            style={{ fontSize: 50, letterSpacing: "-0.04em" }}
          >
            DS
          </text>
          <line x1="76" y1="131" x2="124" y2="131" stroke="var(--gold)" strokeWidth="0.6" />
          <line x1="76" y1="69" x2="124" y2="69" stroke="var(--gold)" strokeWidth="0.6" />
          {[0, 90, 180, 270].map((deg) => (
            <rect
              key={deg}
              x="97.5"
              y="35.5"
              width="5"
              height="5"
              fill="var(--gold)"
              stroke="none"
              transform={`rotate(${deg} 100 100) rotate(45 100 38)`}
            />
          ))}
        </g>
      )}

      {variant === "egg" && (
        <g stroke="currentColor">
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse
              key={i}
              cx="100"
              cy="102"
              rx={52 - i * 7}
              ry={64 - i * 8.5}
              strokeWidth={i === 0 ? 0.9 : 0.35}
            />
          ))}
          <circle cx="100" cy="102" r="10" stroke="var(--gold)" strokeWidth="0.8" />
          <circle cx="100" cy="102" r="2.2" fill="var(--gold)" stroke="none" />
        </g>
      )}

      {variant === "sperm" && (
        <g stroke="currentColor" strokeLinecap="round">
          <circle cx="100" cy="100" r="62" strokeWidth="0.35" />
          {[-6, 0, 6].map((dy, i) => (
            <path
              key={dy}
              d={`M30 ${132 + dy} C 58 ${104 + dy}, 78 ${150 + dy}, 104 ${116 + dy} S 132 ${82 + dy}, 140 ${82 + dy}`}
              strokeWidth={i === 1 ? 0.9 : 0.35}
            />
          ))}
          <ellipse
            cx="151"
            cy="77"
            rx="11"
            ry="7.5"
            transform="rotate(-25 151 77)"
            strokeWidth="0.9"
          />
          <circle cx="151" cy="77" r="2" fill="var(--gold)" stroke="none" />
        </g>
      )}
    </svg>
  );
}
