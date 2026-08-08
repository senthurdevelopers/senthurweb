import { layout, approval, project, contacts } from '../data.js'
import { openWhatsApp } from '../whatsapp.js'
import { IconWhatsapp } from './Icons.jsx'

// The approved plot map — the strongest proof on the page.
export default function Layout() {
  const ask = () =>
    openWhatsApp(
      `Hello ${project.developer}, I'm looking at the ${project.name} layout. Which plots are still available?`,
    )

  return (
    <section className="layout" id="layout" aria-labelledby="layout-title">
      <div className="wrap">
        <div className="layout-plate">
          <div className="layout-head">
            <div>
              <p className="kicker">{approval.dtcp} · {approval.plan}</p>
              <h2 id="layout-title">The approved layout</h2>
            </div>
            <button type="button" className="btn btn-gold" onClick={ask}>
              <IconWhatsapp width="17" height="17" aria-hidden="true" />
              Ask which plots are free
            </button>
          </div>

          <img
            className="layout-map"
            src={layout.image}
            alt={layout.alt}
            loading="lazy"
            width="1078"
            height="609"
          />

          <ul className="layout-facts">
            {layout.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
