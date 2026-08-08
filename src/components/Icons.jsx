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

export const iconMap = {
  shield: IconShield,
  road: IconRoad,
  water: IconWater,
  light: IconLight,
  park: IconPark,
  doc: IconDoc,
}

// Gold corner filigree, echoing the printed card's engraved corners.
// Drawn once and mirrored with CSS transforms for the other three corners.
export const Corner = ({ className = '' }) => (
  <svg
    className={`card-corner ${className}`}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 30V6a4 4 0 014-4h24"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 34V12a4 4 0 014-4h22"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      opacity="0.75"
    />
    <path
      d="M14 22c6.5 0 11-3.5 11-9M14 22c0-6 4-10 10-10"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <circle cx="25" cy="13" r="1.6" fill="currentColor" />
    <circle cx="13" cy="25" r="1.6" fill="currentColor" />
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
