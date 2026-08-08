import { contacts } from '../data.js'
import { IconPhone } from './Icons.jsx'
import Brand from './Brand.jsx'

// Launch-page masthead: the lockup (linking home) and one phone number.
export default function Header() {
  return (
    <header className="masthead">
      <div className="wrap masthead-inner">
        <Brand light href="/" />
        <a className="masthead-call" href={`tel:${contacts[0].tel}`}>
          <IconPhone width="17" height="17" aria-hidden="true" />
          <span>{contacts[0].display}</span>
        </a>
      </div>
    </header>
  )
}
