import { company, office, project } from '../data.js'
import { Rule } from './Icons.jsx'

const creed = [
  { label: 'Vision', text: company.vision },
  { label: 'Mission', text: company.mission },
  { label: 'Purpose', text: company.purpose },
]

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-plate">
        <div className="about-lead">
          <p className="kicker">Since {company.since}</p>
          <h2 id="about-title">{project.legal}</h2>
          <p className="about-what">{company.what}</p>
          <Rule />
          <p className="about-body">{company.about}</p>

          <p className="about-values">
            {company.values.map((v, i) => (
              <span key={v}>
                {v}
                {i < company.values.length - 1 && <i aria-hidden="true">·</i>}
              </span>
            ))}
          </p>
        </div>

        <div className="about-side">
          <dl className="creed">
            {creed.map((c) => (
              <div key={c.label}>
                <dt>{c.label}</dt>
                <dd>{c.text}</dd>
              </div>
            ))}
          </dl>

          <div className="about-projects">
            <p className="about-projects-label">Layouts around Coimbatore</p>
            <ul>
              {company.projects.map((p) => (
                <li key={p.place}>
                  <strong>{p.place}</strong>
                  <span>{p.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <address className="about-office">
            {office.lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <a href={`mailto:${office.email}`}>{office.email}</a>
          </address>
          </div>
        </div>
      </div>
    </section>
  )
}
