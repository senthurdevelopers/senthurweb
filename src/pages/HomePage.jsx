import {
  project,
  company,
  event,
  location,
  office,
  contacts,
  homeNav,
  amenities,
  directionsUrl,
} from '../data.js'
import { whatsappUrl } from '../whatsapp.js'
import Brand from '../components/Brand.jsx'
import { iconMap, IconPhone, IconPin, IconArrow, IconWhatsapp } from '../components/Icons.jsx'

const creed = [
  { label: 'Vision', text: company.vision },
  { label: 'Mission', text: company.mission },
  { label: 'Purpose', text: company.purpose },
]

export default function HomePage() {
  return (
    <div className="home">
      <header className="home-head">
        <div className="wrap home-head-inner">
          <Brand light href="/" />
          <nav className="home-nav">
            {homeNav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a className="home-nav-cta" href="/launch/">
              Grand Opening
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="home-hero">
          {/* the logo's hexagon, opened up as hero geometry */}
          <svg
            className="hero-hex"
            viewBox="0 0 560 560"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M280 40l208 120v240L280 520 72 400V160L280 40z"
              stroke="rgba(246,241,232,0.14)"
              strokeWidth="2"
            />
            <path
              d="M280 110l147 85v170l-147 85-147-85V195l147-85z"
              stroke="rgba(246,241,232,0.1)"
              strokeWidth="1.5"
            />
            {/* one orange facet, like the mark's lit face */}
            <path
              d="M280 40l208 120-208 120V40z"
              fill="rgba(241,93,33,0.14)"
            />
            <path
              d="M280 40l208 120-208 120"
              stroke="rgba(241,93,33,0.55)"
              strokeWidth="2"
            />
          </svg>

          <div className="wrap">
            <p className="home-eyebrow">Building trust · Creating values</p>
            <h1>
              Land worth building
              <br />
              your life on.
            </h1>
            <p className="home-lead">
              DTCP approved plots across Coimbatore. Land aggregators, promoters
              and developers since {company.since}.
            </p>
            <div className="home-cta">
              <a className="hbtn hbtn-orange" href="/launch/">
                Grand Opening · {event.dateLabel}
                <IconArrow width="17" height="17" aria-hidden="true" />
              </a>
              <a className="hbtn hbtn-glass" href={`tel:${contacts[0].tel}`}>
                <IconPhone width="17" height="17" aria-hidden="true" />
                {contacts[0].display}
              </a>
            </div>
          </div>
        </section>

        {/* the live launch, pulled forward */}
        <section className="home-launch" aria-labelledby="home-launch-title">
          <div className="wrap home-launch-inner">
            <div>
              <span className="home-tag">Open now</span>
              <h2 id="home-launch-title">{project.name}</h2>
              <p>
                {project.badge} at {location.line2.replace(/,$/, '')}. Plots open
                for booking, with launch-day offers on {event.dateLabel}.
              </p>
            </div>
            <a className="hbtn hbtn-orange" href="/launch/">
              See the opening
              <IconArrow width="17" height="17" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* about */}
        <section className="home-about" id="about" aria-labelledby="home-about-title">
          <div className="wrap home-about-grid">
            <div>
              <p className="home-eyebrow home-eyebrow-ink">About us</p>
              <h2 id="home-about-title">{project.legal}</h2>
              <p className="home-about-body">{company.about}</p>
              <p className="home-values">
                {company.values.map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </p>
            </div>

            <dl className="home-creed">
              {creed.map((c) => (
                <div key={c.label}>
                  <dt>{c.label}</dt>
                  <dd>{c.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* what every layout carries */}
        <section className="home-standards" aria-labelledby="home-standards-title">
          <div className="wrap">
            <h2 id="home-standards-title">What every layout carries</h2>
            <ul className="home-standards-list">
              {amenities.map((a) => {
                const Icon = iconMap[a.icon]
                return (
                  <li key={a.title}>
                    <Icon width="20" height="20" aria-hidden="true" />
                    {a.title}
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* projects */}
        <section className="home-projects" id="projects" aria-labelledby="home-projects-title">
          <div className="wrap">
            <p className="home-eyebrow home-eyebrow-ink">Projects</p>
            <h2 id="home-projects-title">Layouts around Coimbatore</h2>
            <ul className="home-project-list">
              {company.projects.map((p) => (
                <li key={p.place}>
                  <span className="home-project-place">{p.place}</span>
                  <span className="home-project-note">{p.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* contact */}
        <section className="home-contact" id="contact" aria-labelledby="home-contact-title">
          <div className="wrap home-contact-grid">
            <div>
              <p className="home-eyebrow">Contact</p>
              <h2 id="home-contact-title">Talk to us</h2>
              <address className="home-office">
                {office.lines.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </address>
              <p className="home-office-mail">
                <a href={`mailto:${office.email}`}>{office.email}</a>
              </p>
            </div>

            <div className="home-contact-actions">
              {contacts.map((c) => (
                <a key={c.tel} className="home-tel" href={`tel:${c.tel}`}>
                  <IconPhone width="18" height="18" aria-hidden="true" />
                  {c.display}
                </a>
              ))}
              <a
                className="hbtn hbtn-orange hbtn-block"
                href={whatsappUrl(
                  `Hello ${project.developer}, I'd like to know more about your plots.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsapp width="17" height="17" aria-hidden="true" />
                WhatsApp us
              </a>
              <a
                className="hbtn hbtn-line hbtn-block"
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconPin width="17" height="17" aria-hidden="true" />
                Site location
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-foot">
        <div className="wrap">
          <Brand light href={null} className="home-foot-logo" />
          <p>{project.tagline}</p>
          <p className="home-foot-fine">
            © {new Date().getFullYear()} {project.legal}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
