/**
 * Bundle a built page into one self-contained .html file for sharing —
 * CSS, JS and the logo images inlined, so it opens from disk with no server.
 * Usage: node scripts/make-preview.mjs
 */
import fs from 'fs'
import path from 'path'

const dist = 'dist'
const pages = [
  { html: path.join(dist, 'index.html'), out: 'preview-home.html' },
  { html: path.join(dist, 'launch', 'index.html'), out: 'preview-launch.html' },
]

const assetDir = path.join(dist, 'assets')
const read = (f) => fs.readFileSync(f, 'utf8')

const dataUri = (file) => {
  const buf = fs.readFileSync(path.join(dist, file))
  const mime = file.endsWith('.jpg') ? 'image/jpeg' : 'image/png'
  return `data:${mime};base64,${buf.toString('base64')}`
}

/**
 * Vite splits shared code into its own chunk, so an inlined entry still carries
 * `import "./styles-xxxx.js"` — a relative path that means nothing once the
 * script lives inside the HTML. Resolve each chunk to a base64 module URL,
 * depth-first, so the whole graph travels in the one file.
 */
const IMAGES = ['senthur-logo.png', 'senthur-mark.png', 'layout-map.jpg']
const inlineImages = (text) => {
  for (const img of IMAGES) text = text.split(`/${img}`).join(dataUri(img))
  return text
}

const moduleCache = new Map()
const inlineChunk = (file) => {
  if (moduleCache.has(file)) return moduleCache.get(file)
  // Images must be inlined in the chunk source *before* it is base64-encoded,
  // or the asset paths end up buried inside the encoded module.
  let src = inlineImages(read(path.join(assetDir, file)))
  src = src.replace(/(["'])\.\/([\w.-]+\.js)\1/g, (_, q, dep) => {
    const uri = `data:text/javascript;base64,${Buffer.from(inlineChunk(dep)).toString('base64')}`
    return `${q}${uri}${q}`
  })
  moduleCache.set(file, src)
  return src
}

for (const page of pages) {
  let html = read(page.html)

  // inline every local stylesheet and module script
  html = html.replace(
    /<link[^>]+rel="stylesheet"[^>]+href="\/assets\/([^"]+)"[^>]*>/g,
    (_, f) => `<style>${read(path.join(assetDir, f))}</style>`,
  )
  html = html.replace(
    /<script[^>]+src="\/assets\/([^"]+)"[^>]*><\/script>/g,
    (_, f) => `<script type="module">${inlineChunk(f)}</script>`,
  )
  // module preloads point at files that no longer exist standalone
  html = html.replace(/<link[^>]+rel="modulepreload"[^>]*>/g, '')

  // inline the logo artwork referenced directly from the HTML
  html = inlineImages(html)

  fs.writeFileSync(page.out, html)
  console.log(page.out, (html.length / 1024).toFixed(0) + ' kB')
}
