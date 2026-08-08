import { whatsappNumber } from './data.js'

export const whatsappUrl = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

/**
 * Every enquiry on this site is handed to WhatsApp — there is no backend and
 * no email path, so this must not fail silently.
 *
 * `window.open` is blocked by default in some mobile browsers even inside a
 * click handler. When that happens it returns null (or a window that is
 * immediately closed), and the customer would be left staring at a form that
 * did nothing. Fall back to navigating the current tab, which is never blocked.
 */
export function openWhatsApp(message) {
  const url = whatsappUrl(message)
  let opened = null

  try {
    opened = window.open(url, '_blank', 'noopener,noreferrer')
  } catch {
    opened = null
  }

  if (!opened || opened.closed || typeof opened.closed === 'undefined') {
    window.location.href = url
  }

  return url
}

/** Shared shape for every enquiry, so messages read the same wherever they start. */
export function enquiryMessage({ developer, project, name, phone, lines = [] }) {
  return [
    `Hello ${developer}, I'm interested in ${project}.`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    ...lines,
  ].join('\n')
}
