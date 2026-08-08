// Inline stroke icons — no icon library dependency, inherit currentColor.

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconShield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5.5c0 4.3-2.9 7.9-7 9.5-4.1-1.6-7-5.2-7-9.5V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export const IconRoad = (p) => (
  <svg {...base} {...p}>
    <path d="M6 3L3 21M18 3l3 18M12 4v3M12 10.5v3M12 17v3" />
  </svg>
)

export const IconWater = (p) => (
  <svg {...base} {...p}>
    <path d="M4 6h7v4M11 8h5a2 2 0 012 2v1" />
    <path d="M16 14c0 1.5 1.2 2.3 1.2 3.6A1.7 1.7 0 0116 19a1.7 1.7 0 01-1.2-1.4c0-1.3 1.2-2.1 1.2-3.6z" />
    <path d="M4 4v4" />
  </svg>
)

export const IconLight = (p) => (
  <svg {...base} {...p}>
    <path d="M12 9v12M8 21h8" />
    <path d="M7 6.5A5 5 0 0112 4a5 5 0 015 2.5c.4.7-.1 1.5-.9 1.5H7.9c-.8 0-1.3-.8-.9-1.5z" />
  </svg>
)

export const IconPark = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l4 6h-2.5l3 4.5h-9L10.5 9H8l4-6zM12 13.5V18" />
    <path d="M4 21h16M6 18h5" />
  </svg>
)

export const IconDoc = (p) => (
  <svg {...base} {...p}>
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v4h4M9.5 13l1.6 1.6 3.4-3.4" />
  </svg>
)

export const IconCalendar = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
)

export const IconClock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.2 2" />
  </svg>
)

export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const IconLunch = (p) => (
  <svg {...base} {...p}>
    <path d="M4 16h16a8 8 0 00-16 0zM3 19h18M12 5v3" />
  </svg>
)

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M6 3.5h3l1.5 4-2 1.4a12 12 0 006.6 6.6l1.4-2 4 1.5v3a2 2 0 01-2.2 2A16.5 16.5 0 014 5.7 2 2 0 016 3.5z" />
  </svg>
)

export const IconWhatsapp = (p) => (
  <svg {...base} {...p}>
    <path d="M3.8 20.2l1.2-4a8 8 0 113.1 3l-4.3 1z" />
    <path d="M9 9.2c.3 2.6 3.1 5.2 5.6 5.6.6.1 1.4-.5 1.4-1.2l-1.7-.8-.9.9c-1-.5-2-1.4-2.5-2.5l.9-.9-.8-1.7c-.7 0-1.3.8-1.2 1.4z" />
  </svg>
)

export const IconArrow = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
)

export const IconLock = (p) => (
  <svg {...base} {...p}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="1.5" />
    <path d="M8 10.5V7.5a4 4 0 018 0v3M12 14.5v2" />
  </svg>
)

export const iconMap = {
  shield: IconShield,
  road: IconRoad,
  water: IconWater,
  light: IconLight,
  park: IconPark,
  doc: IconDoc,
  lock: IconLock,
}

// Floral corner spray, echoing the printed card's engraved corners:
// a curled gold stem with leaves, one navy blossom with a gold heart, buds.
// Drawn once and mirrored with CSS transforms for the other three corners.
export const Corner = ({ className = '' }) => (
  <svg
    className={`card-corner ${className}`}
    viewBox="0 0 120 120"
    fill="none"
    aria-hidden="true"
  >
    {/* corner keylines */}
    <path
      d="M4 62V12a8 8 0 018-8h50"
      stroke="var(--gold-foil)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 70V20a8 8 0 018-8h50"
      stroke="var(--gold-foil)"
      strokeWidth="0.9"
      strokeLinecap="round"
      opacity="0.6"
    />
    {/* main stem curling out of the corner */}
    <path
      d="M22 22c14 2 24 10 28 22 3 9 1 18-5 24"
      stroke="var(--gold-foil)"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M22 22c2 14 10 24 22 28 9 3 18 1 24-5"
      stroke="var(--gold-foil)"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    {/* leaves along the stems */}
    <path
      d="M34 27c4-4 10-5 14-2-1 5-6 9-11 8-2-.4-3-4-3-6z"
      fill="var(--gold-foil)"
      opacity="0.85"
    />
    <path
      d="M27 34c-4 4-5 10-2 14 5-1 9-6 8-11-.4-2-4-3-6-3z"
      fill="var(--gold-foil)"
      opacity="0.85"
    />
    <path
      d="M52 52c5-1 9 1 11 5-3 3-8 3-11 0-1.4-1.4-1-4 0-5z"
      fill="var(--gold-foil)"
      opacity="0.7"
    />
    {/* navy blossom with gold heart */}
    <g transform="translate(46 46)">
      <path
        d="M0-11c3 0 5 2.5 5 5.5 3-1 6 .5 7 3.4 1 3-.6 6-3.4 7 1.8 2.4 1.4 5.8-1 7.6-2.4 1.8-5.8 1.2-7.6-1-1.8 2.2-5.2 2.8-7.6 1-2.4-1.8-2.8-5.2-1-7.6-2.8-1-4.4-4-3.4-7 1-2.9 4-4.4 7-3.4 0-3 2-5.5 5-5.5z"
        fill="var(--blossom, #2b4470)"
      />
      <circle r="3.2" fill="var(--gold-bright)" />
    </g>
    {/* buds and dots trailing off */}
    <circle cx="62" cy="30" r="2.2" fill="var(--gold-foil)" opacity="0.8" />
    <circle cx="30" cy="62" r="2.2" fill="var(--gold-foil)" opacity="0.8" />
    <circle cx="72" cy="22" r="1.3" fill="var(--gold-foil)" opacity="0.55" />
    <circle cx="22" cy="72" r="1.3" fill="var(--gold-foil)" opacity="0.55" />
  </svg>
)

// The enclave gate at dusk, drawn in gold line on the navy canvas — the web
// counterpart of the printed invite's illustrated gateway. Pillars, arch,
// wrought gates, lamps and palms; wide and shallow so it sits under the card.
export const GateScene = () => (
  <svg
    className="gate-scene"
    viewBox="0 0 1200 230"
    fill="none"
    aria-hidden="true"
    preserveAspectRatio="xMidYMax meet"
  >
    <g stroke="var(--gold-foil)" strokeWidth="1.6" strokeLinecap="round">
      {/* ground */}
      <path d="M40 214h1120" opacity="0.5" />
      <path d="M140 222h920" opacity="0.25" />
      {/* left pillar */}
      <path d="M420 214V96h56v118M420 96h-8v-12h72v12h-8M436 110h24M436 124h24" />
      <path d="M430 214v-88M502 214v-88" opacity="0.4" />
      {/* right pillar */}
      <path d="M724 214V96h56v118M716 96h-8v-12h72v12h-8M740 110h24M740 124h24" />
      {/* arch between pillars */}
      <path d="M476 84c40-44 208-44 248 0" />
      <path d="M476 74c40-44 208-44 248 0" opacity="0.5" />
      {/* nameplate on the arch */}
      <rect x="524" y="44" width="152" height="26" rx="3" />
      {/* gates — verticals with a centre split and scroll tops */}
      <path d="M488 214v-92M512 214v-96M536 214v-99M560 214v-101M584 214v-102" opacity="0.75" />
      <path d="M616 214v-102M640 214v-101M664 214v-99M688 214v-96M712 214v-92" opacity="0.75" />
      <path d="M488 140h112M616 140h112M488 176h112M616 176h112" opacity="0.55" />
      <path d="M598 214V108" />
      {/* lamps on the pillars */}
      <path d="M448 84v-16M776 84v-16" />
      <path d="M440 62h16l-2-14h-12l-2 14zM768 62h16l-2-14h-12l-2 14z" />
      {/* palms flanking */}
      <path d="M300 214c4-40 2-72-6-96M294 118c-16-10-36-12-52-6M294 118c-4-18-14-32-28-40M294 118c8-16 22-26 38-28M294 118c16-4 34 0 46 10" />
      <path d="M900 214c-4-40-2-72 6-96M906 118c16-10 36-12 52-6M906 118c4-18 14-32 28-40M906 118c-8-16-22-26-38-28M906 118c-16-4-34 0-46 10" />
      {/* low shrubs */}
      <path d="M360 214c0-12 10-22 24-22s24 10 24 22M792 214c0-12 10-22 24-22s24 10 24 22" opacity="0.6" />
    </g>
    {/* lamp glow */}
    <circle cx="448" cy="55" r="7" fill="var(--gold-bright)" opacity="0.9" />
    <circle cx="776" cy="55" r="7" fill="var(--gold-bright)" opacity="0.9" />
    <circle cx="448" cy="55" r="16" fill="var(--gold-bright)" opacity="0.16" />
    <circle cx="776" cy="55" r="16" fill="var(--gold-bright)" opacity="0.16" />
    {/* nameplate lettering */}
    <text
      x="600"
      y="61"
      textAnchor="middle"
      fontFamily="Cinzel, serif"
      fontSize="12"
      letterSpacing="2.5"
      fill="var(--gold-bright)"
    >
      SENTHUR KRISHNA
    </text>
  </svg>
)

// Thin engraved rule, the way a printed invitation separates blocks.
export const Rule = () => (
  <div className="rule" aria-hidden="true">
    <span />
    <svg width="30" height="8" viewBox="0 0 30 8" fill="none">
      <path d="M15 0.8l2.4 3.2L15 7.2 12.6 4 15 .8z" fill="currentColor" />
      <circle cx="4" cy="4" r="1" fill="currentColor" />
      <circle cx="26" cy="4" r="1" fill="currentColor" />
    </svg>
    <span />
  </div>
)
