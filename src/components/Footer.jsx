import { project, event, contacts, office } from '../data.js'
import Brand from './Brand.jsx'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <Brand light href="/" className="foot-logo" />

        <p className="foot-name">
          {project.tagline} · <span>{project.name}</span>
        </p>
        <p className="foot-line">
          {event.dateLabel}, {event.dayLabel} · {event.timeLabel}{' '}
          {event.timeNote.toLowerCase()} · Kalangal, Sulur, Coimbatore
        </p>
        <p className="foot-calls">
          {contacts.map((c) => (
            <a key={c.tel} href={`tel:${c.tel}`}>
              {c.display}
            </a>
          ))}
        </p>
        <p className="foot-office">
          {office.lines.join(' ')}{' '}
          <a href={`mailto:${office.email}`}>{office.email}</a>
        </p>
        <p className="foot-fine">
          © {new Date().getFullYear()} {project.legal}. {project.badge}.
        </p>
      </div>
    </footer>
  )
}
