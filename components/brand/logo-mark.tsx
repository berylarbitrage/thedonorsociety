/**
 * The Donor Society crest: a "DS" Didone monogram inside a fine double ring,
 * marked at the four cardinal points. Letters use currentColor; the rings use
 * the antique-gold token. Pure SVG so it stays crisp anywhere.
 */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  const ticks = [0, 90, 180, 270];
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <g fill="none" stroke="var(--gold)">
        <circle cx="50" cy="50" r="47" strokeWidth="1.25" />
        <circle cx="50" cy="50" r="42.5" strokeWidth="0.5" />
      </g>
      {ticks.map((deg) => (
        <rect
          key={deg}
          x="48.4"
          y="1.4"
          width="3.2"
          height="3.2"
          fill="var(--gold)"
          transform={`rotate(${deg} 50 50) rotate(45 50 3)`}
        />
      ))}
      <text
        x="50"
        y="60.5"
        textAnchor="middle"
        fill="currentColor"
        className="font-serif"
        style={{ fontSize: 31, letterSpacing: "-0.04em" }}
      >
        DS
      </text>
      <line x1="38" y1="70" x2="62" y2="70" stroke="var(--gold)" strokeWidth="0.6" />
      <line x1="38" y1="30" x2="62" y2="30" stroke="var(--gold)" strokeWidth="0.6" />
    </svg>
  );
}
