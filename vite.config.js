import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Makes the Vite-generated CSS <link> non-blocking by switching it to
 * media="print" initially, then swapping to media="all" on load.
 * This removes the CSS from the critical render path (~150 ms savings).
 */
const nonBlockingCssPlugin = () => ({
  name: 'non-blocking-css',
  transformIndexHtml(html) {
    return html.replace(
      /<link rel="stylesheet" crossorigin href="(\/assets\/index-[^"]+\.css)">/g,
      '<link rel="stylesheet" crossorigin href="$1" media="print" onload="this.media=\'all\'"><noscript><link rel="stylesheet" href="$1"></noscript>'
    )
  },
})

export default defineConfig({
  plugins: [react(), nonBlockingCssPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Keep Firebase out of the main bundle so it doesn't block parse
          if (id.includes('node_modules/firebase')) return 'firebase'
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})

