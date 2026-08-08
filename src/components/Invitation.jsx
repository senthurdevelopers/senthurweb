import { project, event, location, contacts, directionsUrl } from '../data.js'
import { IconPhone, IconPin, Rule, Corner } from './Icons.jsx'
import Countdown from './Countdown.jsx'

const facts = [
  { label: 'Date', value: event.dateLabel, note: event.dayLabel },
  { label: 'Time', value: event.timeLabel, note: event.timeNote },
  { label: 'Venue', value: 'Kalangal, Sulur', note: 'Coimbatore – 641 402' },
  { label: 'Hospitality', value: 'Lunch', note: 'For every guest' },
]

export default function Invitation() {
  return (
    <section className="invite">
      <div className="wrap">
        <article className="card">
          <Corner className="card-corner-tl" />
          <Corner className="card-corner-tr" />
          <Corner className="card-corner-bl" />
          <Corner className="card-corner-br" />

          <p className="kicker">{project.invite}</p>

          <h1 className="card-title">
            <span className="card-title-main">{project.eventTitle}</span>
            <span className="card-title-of">of</span>
            <span className="card-title-name">{project.name}</span>
          </h1>

          <p className="ribbon">{project.badge}</p>

          <p className="lede">{project.intro}</p>

          <Rule />

          <dl className="facts">
            {facts.map((f) => (
              <div className="fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>
                  {f.value}
                  <span>{f.note}</span>
                </dd>
              </div>
            ))}
          </dl>

          <Countdown />

          <div className="actions">
            <a className="btn btn-gold" href="#visit">
              Reserve a launch-day slot
            </a>
            <a className="btn btn-line" href={`tel:${contacts[0].tel}`}>
              <IconPhone width="17" height="17" aria-hidden="true" />
              Call {contacts[0].display}
            </a>
            <a
              className="btn btn-line"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconPin width="17" height="17" aria-hidden="true" />
              Open in Google Maps
            </a>
          </div>

          <p className="card-foot">
            {location.line1} {location.line2} {location.line3}
          </p>
        </article>
      </div>
    </section>
  )
}
