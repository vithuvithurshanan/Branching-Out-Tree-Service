/**
 * optimise-images.mjs
 * Converts all /public/images/*.jpg to WebP and resizes logo.webp
 * Run: node scripts/optimise-images.mjs
 */

import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const IMG_DIR = path.resolve(__dirname, '../public/images')

const QUALITY = 40   // WebP quality — aggressive compression for 100% PageSpeed score

// Images that are used as full-bleed backgrounds can be wider
// Service card thumbs only need ~320px wide
const SIZE_MAP = {
  'hero-canopy':  { width: 1600 },
  'hero-mist':    { width: 1600 },
  'contact-bg':   { width: 1400 },
  'voices-bg':    { width: 1400 },
  'process-bg':   { width: 1200 },
  'services-bg':  { width: 1400 },
  'cta-bg':       { width: 1200 },
  'about-climber':{ width: 320  },
  'svc-health':   { width: 320  },
  'svc-lot':      { width: 320  },
  'svc-removal':  { width: 320  },
  'svc-storm':    { width: 320  },
  'svc-stump':    { width: 320  },
  'svc-trimming': { width: 320  },
  'work-1':       { width: 500  },
  'work-2':       { width: 500  },
  'work-3':       { width: 500  },
  'work-4':       { width: 500  },
}

async function run() {
  const files = await readdir(IMG_DIR)
  const jpgs = files.filter(f => /\.(jpg|jpeg)$/i.test(f))

  console.log(`\nConverting ${jpgs.length} JPG(s) to WebP...\n`)

  for (const file of jpgs) {
    const base = path.basename(file, path.extname(file))
    const src  = path.join(IMG_DIR, file)
    const dest = path.join(IMG_DIR, `${base}.webp`)
    const dims = SIZE_MAP[base] ?? { width: 1200 }

    const before = (await stat(src)).size
    await sharp(src)
      .resize({ width: dims.width, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(dest)
    const after = (await stat(dest)).size
    const saved = Math.round((1 - after / before) * 100)
    console.log(`  ✓ ${file} → ${base}.webp  (${kb(before)} → ${kb(after)}, -${saved}%)`)
  }

  // Resize logo: served at 84-96px, stored as 1024×1024
  const logoSrc  = path.join(IMG_DIR, 'logo.webp')
  const logoDest = path.join(IMG_DIR, 'logo-opt.webp')
  const logoBefore = (await stat(logoSrc)).size
  await sharp(logoSrc)
    .resize({ width: 96, height: 96, fit: 'contain', background: { r:0,g:0,b:0,alpha:0 } })
    .webp({ quality: 90, effort: 6 })
    .toFile(logoDest)

  // Replace original
  const { rename } = await import('node:fs/promises')
  await rename(logoDest, logoSrc)
  const logoAfter = (await stat(logoSrc)).size
  const logoSaved = Math.round((1 - logoAfter / logoBefore) * 100)
  console.log(`  ✓ logo.webp resized to 96×96  (${kb(logoBefore)} → ${kb(logoAfter)}, -${logoSaved}%)`)

  console.log('\nDone! Update image src paths in JSX from .jpg → .webp\n')
}

const kb = (bytes) => `${Math.round(bytes / 1024)} KiB`

run().catch(err => { console.error(err); process.exit(1) })
