import { project } from '../data.js'

// The lockup extracted from the approved logo artwork.
// `light` is the ivory-ink version for navy surfaces; the default navy-ink
// version is for ivory surfaces.
export default function Brand({ light = false, href = '/', className = '' }) {
  const src = light ? '/senthur-logo-light.png' : '/senthur-logo.png'
  const img = (
    <img
      className={`brand-logo ${className}`}
      src={src}
      alt={`${project.legal} — ${project.tagline}`}
      width="1400"
      height="432"
    />
  )

  if (!href) return img

  return (
    <a className="brand-link" href={href} aria-label={`${project.legal} home`}>
      {img}
    </a>
  )
}
