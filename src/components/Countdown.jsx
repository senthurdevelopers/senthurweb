import { useEffect, useState } from 'react'
import { event } from '../data.js'

const target = new Date(event.isoDate).getTime()

function remaining() {
  const ms = target - Date.now()
  if (ms <= 0) return null
  const mins = Math.floor(ms / 60000)
  return {
    days: Math.floor(mins / 1440),
    hours: Math.floor((mins % 1440) / 60),
    minutes: mins % 60,
  }
}

const pad = (n) => String(n).padStart(2, '0')

// The countdown is the launch-est thing on the page — engraved gold numerals
// between hairlines, like a date line on the printed card.
export default function Countdown() {
  const [left, setLeft] = useState(remaining)

  useEffect(() => {
    const id = setInterval(() => setLeft(remaining()), 30000)
    return () => clearInterval(id)
  }, [])

  if (!left) {
    return (
      <p className="countdown countdown-live">
        The launch is on. We are at the site today.
      </p>
    )
  }

  const units = [
    { value: left.days, label: left.days === 1 ? 'Day' : 'Days' },
    { value: left.hours, label: 'Hours' },
    { value: left.minutes, label: 'Minutes' },
  ]

  return (
    <div className="countdown-frame" role="timer" aria-live="off">
      <p className="countdown-caption">Gates open in</p>
      <div className="countdown-row">
        {units.map((u, i) => (
          <div className="cd-unit" key={u.label}>
            <span className="cd-value">{pad(u.value)}</span>
            <span className="cd-label">{u.label}</span>
            {i < units.length - 1 && (
              <span className="cd-sep" aria-hidden="true">
                ·
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
