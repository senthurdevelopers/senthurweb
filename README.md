# Senthur Developers Pvt Ltd — Website

Two static pages, built with React + Vite:

| Page | Route | Source |
| --- | --- | --- |
| Home — the company | `/` | [index.html](index.html) → `src/pages/HomePage.jsx` |
| Grand Launch invitation | `/launch` | [launch/index.html](launch/index.html) → `src/pages/LaunchPage.jsx` |

It is a **multi-page build, not a client-side router** — each route is a real HTML file, so any static host serves `/launch` with no rewrite rules.

## Deploy

Vercel (config in [vercel.json](vercel.json)): import the repo, no settings to change — build `npm run build`, output `dist`, clean URLs on. Point `senthurdevelopers.com` at the project in Vercel → Domains. Any other static host works too: run `npm run build` and upload `dist/`.

## Brand

Logo artwork lives in `public/`, extracted from the approved PDF:
`senthur-logo.png` (navy ink, for light surfaces), `senthur-logo-light.png` (ivory ink, for navy surfaces), `senthur-mark.png` (hexagon only, used as the favicon).

Brand navy `#0B2848`, brand orange `#F15D21`. Filled buttons and chips use `#C2450E` — the same hue deepened so white type clears 4.5:1; full-strength orange stays on rules, icons and edges.

`npm run preview:file` writes `preview-home.html` / `preview-launch.html` — single self-contained files (CSS, JS and logos inlined) for sending to someone who just wants to look.

---

# The launch page

Single-page React site for the **Grand Launch of Senthur Krishna Enclave** (DTCP approved layout, Kalangal, Sulur, Coimbatore) by **Senthur Developers**.

Stack: React 18 + Vite. No CSS framework, no UI library — one stylesheet, inline SVG icons. Fully responsive (mobile-first breakpoints at 980 / 760 / 480px).

## Run

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run build` outputs static files to `dist/` — deploy that folder to any static host (Squarespace domain pointed at Netlify/Vercel/Hostinger, S3, cPanel, etc.). `base` is `./` so it also works from a subfolder.

## Editing content

**All copy, dates, phone numbers and links live in [`src/data.js`](src/data.js).** Change values there — components read from it. Nothing else needs touching for a content update.

| Key | What it controls |
| --- | --- |
| `project` | Developer name, project name, badge, invite lines, closing paragraph |
| `event.isoDate` | Countdown target — `2026-08-09T10:00:00+05:30` (IST) |
| `event.*Label` | Displayed date / day / time / venue |
| `location` | Address lines + Google Maps search query (map embed and directions link derive from it) |
| `amenities` | The 6 highlight cards (icon keys map to `src/components/Icons.jsx`) |
| `contacts` | The 3 phone numbers — `display` is shown, `tel` is dialled |
| `whatsappNumber` | Number the enquiry form and WhatsApp buttons open |

## Structure

Three sections, deliberately short: the invitation, a highlights carousel, and one block that handles map + slot + call.

```
index.html            meta / SEO / Google Fonts
src/main.jsx          entry
src/App.jsx           section order
src/data.js           ← all editable content
src/styles.css        full stylesheet (design tokens at the top)
src/components/
  Header.jsx          slim masthead: brand + one phone number
  Invitation.jsx      the invitation card — headline, DTCP ribbon,
                      Date / Time / Venue / Lunch facts, three CTAs
  Countdown.jsx       one quiet line ("Opens in 18 hrs · 53 min"),
                      flips to "the launch is on" at 10:00 AM IST
  Highlights.jsx      6 highlights as a scroll-snap carousel
                      (arrows + dots on desktop, touch drag on mobile)
  Visit.jsx           Google Map + slot request form + the three numbers
  Footer.jsx          name, date line, phone numbers
  CallBar.jsx         mobile-only Call / WhatsApp bar
  Icons.jsx           inline SVG icon set + engraved rule
```

## Design intent

Treated as a **printed invitation**, not a template landing page: cream paper with a faint grain, navy ink, a gold foil keyline inside the card border, engraved rules. No gradient glows, glass panels or floating shadow cards.

Palette is the one from the printed invite — navy `#10254c`, foil gold `#c9a227`, cream `#f2ece0`, maroon `#7a1b1b` for the countdown line. Dark mode is composed, not inverted: navy paper, brighter gold, softened maroon. All tokens sit at the top of `styles.css`.

**Type:** Cinzel (Roman inscriptional caps) for the headline and section titles, Pinyon Script (copperplate) for the project name only, Libre Franklin for everything read at speed — facts, labels, the form. Gold splits into two tokens: `--gold` is text-safe (AA on both papers), `--gold-foil` is for rules, borders and button fills.

**Rules the code holds to**
- Depth declared once — the card is a border, never border *plus* shadow. No shadows anywhere.
- One authored motion moment: the invitation card settles in on load (700ms, `cubic-bezier(0.16, 1, 0.3, 1)`). `prefers-reduced-motion` gets an intentional alternative — the card still fades in, nothing travels — not a global animation kill.
- Text ≥ 4.5:1 and control borders ≥ 3:1 in **both** themes (`--control-edge` is a separate token from the decorative `--line` for exactly this reason).
- Touch targets ≥ 44px, real `<label for>` on every field, sentence-case labels rather than tracked caps.

## Notes for the team

- **The slot form has no backend.** It validates name + mobile, then opens WhatsApp with name, number and chosen slot pre-filled to `whatsappNumber`. If leads must land in a CRM or inbox instead, swap the `submit` handler in `Visit.jsx` for a POST (Formspree, Google Apps Script, or your own API).
- The map is a keyless Google Maps embed driven by `location.query`. If the layout has an exact pin, replace `mapEmbedUrl` in `data.js` with the "Embed a map" iframe URL from Google Maps.
- **Placeholder copy to confirm before going live:** the three slot times in `Visit.jsx` (10:00–11:30, 11:30–1:00, after lunch) and the one-line notes under each highlight in `data.js`.
- No project photography is used — none was supplied. Drop real site/gate photos into `public/` if you want imagery in the carousel.
- Fonts load from Google Fonts (Cormorant Garamond, Inter, Great Vibes). Self-host them if the site must work offline.
