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

// Deliberately a single quiet line, not a dashboard of flip-cards.
export default function Countdown() {
  const [left, setLeft] = useState(remaining)

  useEffect(() => {
    const id = setInterval(() => setLeft(remaining()), 30000)
    return () => clearInterval(id)
  }, [])

  if (!left) {
    return <p className="countdown">The launch is on — we are at the site today.</p>
  }

  const parts = [
    left.days ? `${left.days} ${left.days === 1 ? 'day' : 'days'}` : null,
    left.days || left.hours ? `${left.hours} hrs` : null,
    `${left.minutes} min`,
  ].filter(Boolean)

  return <p className="countdown">Opens in {parts.join(' · ')}</p>
}
