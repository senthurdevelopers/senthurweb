import { useCallback, useEffect, useRef, useState } from 'react'
import { amenities } from '../data.js'
import { iconMap, IconArrow } from './Icons.jsx'

// Scroll-snap carousel: native scrolling (so touch drag just works),
// with arrow buttons and dots for pointer + keyboard users.
export default function Highlights() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [edges, setEdges] = useState({ start: true, end: false })

  // Positions come from the real card offsets, not an assumed step width,
  // so gaps and responsive card widths can change freely.
  const positions = () => {
    const el = trackRef.current
    if (!el) return []
    const base = el.firstElementChild ? el.firstElementChild.offsetLeft : 0
    return [...el.children].map((c) => c.offsetLeft - base)
  }

  const measure = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const pos = positions()
    const x = el.scrollLeft
    let nearest = 0
    pos.forEach((p, i) => {
      if (Math.abs(p - x) < Math.abs(pos[nearest] - x)) nearest = i
    })
    setActive(nearest)
    setEdges({
      start: x <= 4,
      end: x + el.clientWidth >= el.scrollWidth - 4,
    })
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    measure()
    el.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      el.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  const scrollTo = (index) => {
    const el = trackRef.current
    const pos = positions()
    if (!el || !pos.length) return
    const i = Math.min(Math.max(index, 0), pos.length - 1)
    el.scrollTo({ left: pos[i], behavior: 'smooth' })
    // Update immediately rather than waiting on the scroll event, so the
    // arrows and dots stay in step even mid-animation.
    setActive(i)
    setEdges({
      start: pos[i] <= 4,
      end: pos[i] + el.clientWidth >= el.scrollWidth - 4,
    })
  }

  // Step by one card from the *current scroll position*, not the active index —
  // at the far end several cards share the same max scroll offset.
  const nudge = (dir) => {
    const el = trackRef.current
    const pos = positions()
    if (!el || pos.length < 2) return
    const step = pos[1] - pos[0]
    const target = el.scrollLeft + dir * step
    let nearest = 0
    pos.forEach((p, i) => {
      if (Math.abs(p - target) < Math.abs(pos[nearest] - target)) nearest = i
    })
    scrollTo(nearest)
  }

  return (
    <section className="strip" id="highlights" aria-labelledby="highlights-title">
      <div className="wrap strip-head">
        <h2 id="highlights-title">What the layout gives you</h2>
        <div className="strip-nav">
          <button
            type="button"
            onClick={() => nudge(-1)}
            disabled={edges.start}
            aria-label="Previous highlights"
          >
            <IconArrow width="18" height="18" style={{ transform: 'rotate(180deg)' }} />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            disabled={edges.end}
            aria-label="Next highlights"
          >
            <IconArrow width="18" height="18" />
          </button>
        </div>
      </div>

      <div className="track" ref={trackRef} tabIndex="0" aria-label="Layout highlights">
        {amenities.map((a) => {
          const Icon = iconMap[a.icon]
          return (
            <article className="slide" key={a.title}>
              <div className="slide-head">
                <span className="slide-icon">
                  <Icon width="22" height="22" aria-hidden="true" />
                </span>
                <h3>{a.title}</h3>
              </div>
              <p>{a.note}</p>
            </article>
          )
        })}
      </div>

      <div className="dots wrap" role="tablist" aria-label="Highlight slides">
        {amenities.map((a, i) => (
          <button
            key={a.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={a.title}
            className={i === active ? 'is-active' : ''}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </section>
  )
}
