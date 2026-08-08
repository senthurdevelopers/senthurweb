import { contacts } from '../data.js'
import { IconPhone, IconArrow } from './Icons.jsx'
import Brand from './Brand.jsx'

// Launch-page masthead: the lockup, a way back to the main site, one number.
export default function Header() {
  return (
    <header className="masthead">
      <div className="wrap masthead-inner">
        <Brand light href="/" />

        <div className="masthead-actions">
          <a className="masthead-back" href="/">
            <IconArrow
              width="15"
              height="15"
              style={{ transform: 'rotate(180deg)' }}
              aria-hidden="true"
            />
            Main site
          </a>
          <a className="masthead-call" href={`tel:${contacts[0].tel}`}>
            <IconPhone width="17" height="17" aria-hidden="true" />
            <span>{contacts[0].display}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
