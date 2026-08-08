import { project } from '../data.js'

// The approved lockup, used ONLY in its original colours (navy + orange).
// Surfaces behind it are made light — the artwork itself is never recoloured.
export default function Brand({ href = '/', className = '' }) {
  const img = (
    <img
      className={`brand-logo ${className}`}
      src="/senthur-logo.png"
      alt={`${project.legal}, ${project.tagline}`}
      width="425"
      height="117"
    />
  )

  if (!href) return img

  return (
    <a className="brand-link" href={href} aria-label={`${project.legal} home`}>
      {img}
    </a>
  )
}
