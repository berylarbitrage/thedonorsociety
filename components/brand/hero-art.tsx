/**
 * Embroidery artwork: a square of linen with pinked (zig-zag) edges, pinned at
 * two corners and gently tilted, with a motif sewn in dotted thread, lazy-daisy
 * leaves and mustard French knots; a wooden thread spool and/or a needle sit
 * beside it. Deliberately no round hoop: that shape belongs to the logo.
 * Original inline SVG, purely decorative and static.
 *
 *  - home:  a stitched heart on a sprig, red spool, needle with a loose thread
 *  - egg:   a stitched circle with a blossom at its centre, small sage spool
 *  - sperm: a single flowing running-stitch thread ending in a knot, then on to
 *           a needle
 */
export function HeroArt({
  variant,
  className,
}: {
  variant: "home" | "egg" | "sperm";
  className?: string;
}) {
  const uid = `swatch-${variant}`;
  const swatch = pinkedRect(50, 70, 250, 250, 12, 6);
  return (
    <svg
      viewBox="0 0 400 420"
      className={className ?? "mx-auto size-72"}
      aria-hidden
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <pattern id={`${uid}-weave`} width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 0.5H6M0.5 0V6" stroke="rgba(120,90,60,0.08)" strokeWidth="1" />
        </pattern>
        <linearGradient id={`${uid}-wood`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d9ad74" />
          <stop offset="0.55" stopColor="#c49a6c" />
          <stop offset="1" stopColor="var(--wood-deep)" />
        </linearGradient>
      </defs>

      <g transform="rotate(-5 175 195)">
        {/* paper-cut drop shadow, then the pinked fabric swatch */}
        <path d={swatch} transform="translate(7 9)" fill="rgba(60,42,42,0.12)" />
        <path d={swatch} fill="var(--fabric)" />
        <path d={swatch} fill={`url(#${uid}-weave)`} />
        <path d={swatch} stroke="rgba(120,90,60,0.18)" strokeWidth="1.2" />

        {/* running-stitch frame just inside the pinked edge */}
        <rect
          x="72"
          y="92"
          width="206"
          height="206"
          rx="4"
          stroke="var(--thread)"
          strokeWidth="2.6"
          strokeDasharray="9 8"
        />

        <g transform="translate(175 195) scale(0.74) translate(-200 -222)">
          {variant === "home" && <HomeMotif />}
          {variant === "egg" && <EggMotif />}
          {variant === "sperm" && <SpermMotif />}
        </g>

        {/* round-head pins at the two top corners */}
        <PinHead x={62} y={82} color="var(--thread)" />
        <PinHead x={288} y={82} color="var(--knot)" flip />

        {variant === "home" && (
          <>
            <NeedleShape />
            {/* loose thread curling back toward the swatch */}
            <path
              d="M326 92 C 346 122, 380 130, 372 158 S 330 178, 300 166"
              stroke="var(--thread)"
              strokeWidth="2.6"
            />
          </>
        )}
        {variant === "sperm" && (
          <>
            {/* the thread leaves the fabric at the knot and runs to the needle */}
            <path
              d="M249 142 C 272 128, 296 118, 326 92"
              stroke="var(--thread)"
              strokeWidth="2.6"
            />
            <NeedleShape />
          </>
        )}
      </g>

      {variant === "home" && (
        <Spool x={300} y={282} w={76} h={110} thread="var(--thread)" uid={uid} />
      )}
      {variant === "egg" && <Spool x={312} y={318} w={56} h={78} thread="var(--sage)" uid={uid} />}
    </svg>
  );
}

/** Rectangle outline with zig-zag (pinking-shear) edges, as an SVG path. */
function pinkedRect(x: number, y: number, w: number, h: number, tooth: number, depth: number) {
  const nx = Math.round(w / tooth / 2) * 2;
  const ny = Math.round(h / tooth / 2) * 2;
  const pts: [number, number][] = [];
  for (let i = 0; i < nx; i++) pts.push([x + (i * w) / nx, y - (i % 2 ? depth : 0)]);
  for (let i = 0; i < ny; i++) pts.push([x + w + (i % 2 ? depth : 0), y + (i * h) / ny]);
  for (let i = 0; i < nx; i++) pts.push([x + w - (i * w) / nx, y + h + (i % 2 ? depth : 0)]);
  for (let i = 0; i < ny; i++) pts.push([x - (i % 2 ? depth : 0), y + h - (i * h) / ny]);
  return `M${pts.map(([px, py]) => `${px.toFixed(1)} ${py.toFixed(1)}`).join(" L")} Z`;
}

/** A dressmaker's pin: a short steel shaft with a round coloured head. */
function PinHead({ x, y, color, flip }: { x: number; y: number; color: string; flip?: boolean }) {
  const dx = flip ? -1 : 1;
  return (
    <g>
      <path d={`M${x} ${y} L${x + dx * 30} ${y + 30}`} stroke="#8a8f96" strokeWidth="2.4" />
      <circle cx={x} cy={y} r="9" fill={color} />
      <circle cx={x - 2.5} cy={y - 2.5} r="2.6" fill="rgba(255,255,255,0.6)" />
    </g>
  );
}

/** A sewing needle, eye at the lower left, point at the upper right. */
function NeedleShape() {
  return (
    <g>
      <path d="M322 96 L384 30" stroke="#7d8288" strokeWidth="4.2" />
      <path d="M326 89 L378 34" stroke="#c9ccd1" strokeWidth="1.2" />
      <ellipse
        cx="327"
        cy="91"
        rx="4"
        ry="1.4"
        transform="rotate(-47 327 91)"
        fill="var(--fabric)"
      />
    </g>
  );
}

/** A wooden thread spool seen from the side, wound with coloured thread. */
function Spool({
  x,
  y,
  w,
  h,
  thread,
  uid,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  thread: string;
  uid: string;
}) {
  const flange = Math.max(10, h * 0.13);
  const inset = w * 0.1;
  const coreTop = y + flange;
  const coreH = h - flange * 2;
  const lines = Array.from({ length: Math.floor(coreH / 6) }, (_, i) => coreTop + 4 + i * 6);
  return (
    <g>
      <ellipse cx={x + w / 2} cy={y + h + 6} rx={w * 0.6} ry="6" fill="rgba(60,42,42,0.1)" />
      <rect x={x + inset} y={coreTop} width={w - inset * 2} height={coreH} fill={thread} />
      {lines.map((ly) => (
        <path
          key={ly}
          d={`M${x + inset} ${ly} L${x + w - inset} ${ly - 2}`}
          stroke="rgba(60,42,42,0.16)"
          strokeWidth="1.2"
        />
      ))}
      <path
        d={`M${x + inset + 6} ${coreTop + 4} V${coreTop + coreH - 4}`}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="3"
      />
      <rect x={x} y={y} width={w} height={flange} rx="5" fill={`url(#${uid}-wood)`} />
      <rect x={x} y={y + h - flange} width={w} height={flange} rx="5" fill={`url(#${uid}-wood)`} />
    </g>
  );
}

/** Dotted "satin stitch" thread: round dots along a path. */
const dots = { strokeWidth: 7, strokeDasharray: "1 10" } as const;

function Leaf({
  x,
  y,
  r,
  color = "var(--sage-deep)",
}: {
  x: number;
  y: number;
  r: number;
  color?: string;
}) {
  // A lazy-daisy stitch: one closed loop of thread, anchored at its tip.
  return (
    <path
      d="M0 0 C 7 -9, 19 -9, 24 0 C 19 9, 7 9, 0 0 Z"
      transform={`translate(${x} ${y}) rotate(${r})`}
      stroke={color}
      strokeWidth="3"
    />
  );
}

function Knot({ x, y, r = 6.5 }: { x: number; y: number; r?: number }) {
  // A French knot: a little wound bead of mustard thread.
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="var(--knot)" />
      <path
        d={`M${x - r * 0.45} ${y} a ${r * 0.45} ${r * 0.45} 0 1 1 ${r * 0.45} ${r * 0.45}`}
        stroke="#b88a22"
        strokeWidth="1.4"
      />
    </g>
  );
}

function Cross({ x, y, color = "var(--sage)" }: { x: number; y: number; color?: string }) {
  return (
    <path
      d={`M${x - 5} ${y - 5} L${x + 5} ${y + 5} M${x + 5} ${y - 5} L${x - 5} ${y + 5}`}
      stroke={color}
      strokeWidth="3"
    />
  );
}

function HomeMotif() {
  return (
    <g>
      {/* sprigs */}
      <path d="M104 160 C 120 132, 150 122, 170 136" stroke="var(--sage)" {...dots} />
      <path d="M296 160 C 280 132, 250 122, 230 136" stroke="var(--sage)" {...dots} />
      <Leaf x={120} y={140} r={-120} />
      <Leaf x={146} y={127} r={-80} />
      <Leaf x={280} y={140} r={-60} />
      <Leaf x={254} y={127} r={-100} />

      {/* the heart */}
      <path
        d="M200 290 C 136 244, 128 184, 162 170 C 184 161, 200 178, 200 196 C 200 178, 216 161, 238 170 C 272 184, 264 244, 200 290 Z"
        stroke="var(--thread)"
        {...dots}
      />
      {/* stem, with two leaves */}
      <path d="M200 290 C 200 318, 192 336, 178 356" stroke="var(--sage)" {...dots} />
      <Leaf x={196} y={322} r={-20} />
      <Leaf x={190} y={338} r={200} />

      <Knot x={126} y={268} />
      <Knot x={278} y={262} />
      <Knot x={150} y={318} r={5} />
      <Knot x={254} y={316} r={5} />
      <Cross x={110} y={222} />
      <Cross x={292} y={214} />
    </g>
  );
}

function EggMotif() {
  const petals = [0, 60, 120, 180, 240, 300];
  return (
    <g>
      <circle cx="200" cy="222" r="96" stroke="var(--thread)" {...dots} />
      <circle cx="200" cy="222" r="76" stroke="var(--sage)" strokeWidth="3" strokeDasharray="8 7" />
      {/* blossom of lazy-daisy petals */}
      {petals.map((deg) => (
        <path
          key={deg}
          d="M0 0 C 8 -13, 30 -13, 38 0 C 30 13, 8 13, 0 0 Z"
          transform={`translate(200 222) rotate(${deg}) translate(10 0)`}
          stroke="var(--thread)"
          strokeWidth="3.2"
        />
      ))}
      <Knot x={200} y={222} r={8} />
      <Knot x={190} y={212} r={4} />
      <Knot x={211} y={213} r={4} />
      <Knot x={202} y={234} r={4} />

      <Leaf x={112} y={312} r={-50} />
      <Leaf x={288} y={312} r={-130} />
      <Knot x={126} y={146} r={5} />
      <Knot x={276} y={140} r={5} />
      <Cross x={98} y={226} />
      <Cross x={302} y={222} />
    </g>
  );
}

function SpermMotif() {
  return (
    <g>
      {/* a soft sage echo of the thread */}
      <path
        d="M86 330 C 140 286, 118 214, 182 206 S 252 228, 290 162"
        stroke="var(--sage)"
        strokeWidth="3"
        strokeDasharray="10 9"
      />
      {/* the main flowing thread in running stitch, ending in a knot */}
      <path
        d="M98 350 C 156 302, 130 236, 196 226 S 270 220, 292 156"
        stroke="var(--thread)"
        strokeWidth="5"
        strokeDasharray="16 10"
      />
      <Knot x={300} y={150} r={9} />

      <Leaf x={120} y={170} r={-100} />
      <Leaf x={136} y={156} r={-40} />
      <Knot x={150} y={330} r={5} />
      <Knot x={250} y={318} r={6} />
      <Cross x={230} y={124} />
      <Cross x={98} y={250} />
      <Cross x={292} y={276} color="var(--thread)" />
    </g>
  );
}
