import {
  project,
  event,
  location,
  contacts,
  approval,
  offers,
} from '../data.js'
import { IconPhone, IconPin, Rule, Corner, GoldCoin } from './Icons.jsx'
import Countdown from './Countdown.jsx'

const facts = [
  { label: 'Date', value: event.dateLabel, note: event.dayLabel },
  { label: 'Time', value: event.timeLabel, note: event.timeNote },
  { label: 'Venue', value: 'Kalangal, Sulur', note: 'Coimbatore 641 402' },
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
            <span className="card-title-of">{project.eventSub} of</span>
            <span className="card-title-name">{project.name}</span>
          </h1>

          <p className="ribbon">
            {project.badge} · {approval.dtcp}
          </p>

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

          <div className="offers">
            <div className="offers-head">
              <span className="offers-rule" aria-hidden="true" />
              <p className="offers-label">Launch-Day Offers</p>
              <span className="offers-rule" aria-hidden="true" />
            </div>

            <div className="offer-price">
              <s>{offers[0].strike}</s>
              <p className="offer-price-big">
                ₹10,90,000 <span>/ cent</span>
              </p>
              <p className="offer-price-note">
                Launch-day price, <strong>first 20</strong> site bookings only
              </p>
            </div>

            <div className="offer-coin-panel">
              <GoldCoin className="coin" />
              <span className="offer-divider" aria-hidden="true" />
              <div className="offer-coin-copy">
                <p className="offer-coin-title">1 Gram Gold Coin</p>
                <span className="offer-free">Free</span>
                <p className="offer-note">{offers[1].note}</p>
              </div>
            </div>
          </div>

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
              href={location.shareUrl}
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
