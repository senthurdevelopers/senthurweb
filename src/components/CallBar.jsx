import { contacts, project } from '../data.js'
import { whatsappUrl } from '../whatsapp.js'
import { IconPhone, IconWhatsapp } from './Icons.jsx'

// Mobile-only: most launch traffic arrives on a phone.
export default function CallBar() {
  return (
    <div className="callbar">
      <a href={`tel:${contacts[0].tel}`}>
        <IconPhone width="17" height="17" aria-hidden="true" />
        Call
      </a>
      <a
        className="callbar-gold"
        href={whatsappUrl(
          `Hello ${project.developer}, I'd like to know more about ${project.name}.`,
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconWhatsapp width="17" height="17" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  )
}
