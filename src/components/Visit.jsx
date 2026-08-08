import { useState } from 'react'
import {
  project,
  event,
  location,
  contacts,
  mapEmbedUrl,
  directionsUrl,
} from '../data.js'
import { openWhatsApp, enquiryMessage } from '../whatsapp.js'
import { IconPhone, IconWhatsapp, IconPin } from './Icons.jsx'

const slots = ['10:00 to 11:30 AM', '11:30 AM to 1:00 PM', 'After lunch, 2:00 PM onwards']

export default function Visit() {
  const [form, setForm] = useState({ name: '', phone: '', slot: slots[0] })
  const [error, setError] = useState('')

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (error) setError('')
  }

  // No backend — the slot request opens a pre-filled WhatsApp chat to the
  // sales number so nothing is lost on launch day.
  const submit = (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const phone = form.phone.trim()

    if (name.length < 2) return setError('Please enter your name.')
    if (phone.replace(/\D/g, '').length < 10)
      return setError('Please enter a valid 10-digit mobile number.')

    openWhatsApp(
      enquiryMessage({
        developer: project.developer,
        project: project.name,
        name,
        phone,
        lines: [`Preferred slot on ${event.dateLabel}: ${form.slot}`],
      }),
    )
  }

  return (
    <section className="visit" id="visit" aria-labelledby="visit-title">
      <div className="wrap visit-grid">
        <div className="visit-map">
          <iframe
            title={`Map to ${project.name}, Kalangal, Sulur`}
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            className="map-link"
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconPin width="17" height="17" aria-hidden="true" />
            Open in Google Maps
          </a>
        </div>

        <div className="visit-form">
          <h2 id="visit-title">Reserve a launch-day slot</h2>
          <p className="visit-sub">
            {location.line2} {location.line3} Tell us when you'll come and we'll
            keep the plot details ready.
          </p>

          <form onSubmit={submit} noValidate>
            <label htmlFor="v-name">Your name</label>
            <input
              id="v-name"
              type="text"
              value={form.name}
              onChange={set('name')}
              autoComplete="name"
              maxLength={60}
              placeholder="Name"
            />

            <label htmlFor="v-phone">Mobile number</label>
            <input
              id="v-phone"
              type="tel"
              value={form.phone}
              onChange={set('phone')}
              autoComplete="tel"
              inputMode="numeric"
              maxLength={15}
              placeholder="10-digit mobile number"
            />

            <label htmlFor="v-slot">Preferred slot</label>
            <select id="v-slot" value={form.slot} onChange={set('slot')}>
              {slots.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button className="btn btn-gold btn-block" type="submit">
              <IconWhatsapp width="17" height="17" aria-hidden="true" />
              Send on WhatsApp
            </button>
          </form>

          <p className="visit-call">
            Or call{' '}
            {contacts.map((c, i) => (
              <span key={c.tel}>
                <a href={`tel:${c.tel}`}>
                  <IconPhone width="14" height="14" aria-hidden="true" />
                  {c.display}
                </a>
                {i < contacts.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
