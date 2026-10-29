import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Imágenes del hero que se precargan desde el <head>: así empiezan a bajar junto con el JS
// en vez de esperar a que React cree los <img>.
const heroPreloads = [
  { file: 'src/assets/charles-3d.webp', attrs: { fetchpriority: 'high' } },
  { file: 'src/assets/green-gradient.png' },
  { file: 'src/assets/LinkedIn.webp' },
  { file: 'src/assets/GitHub.webp' },
  // Los átomos se ocultan en <= 768px (ver Hero/style.css)
  { file: 'src/assets/atom-3d.webp', attrs: { media: '(min-width: 769px)' } },
]

const preloadHeroImages = () => ({
  name: 'preload-hero-images',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler(_html, ctx) {
      const assets = Object.values(ctx.bundle ?? {}).filter((f) => f.type === 'asset')
      return heroPreloads.map(({ file, attrs }) => {
        const asset = assets.find((a) => a.originalFileNames?.includes(file))
        if (!asset) throw new Error(`preload-hero-images: no se encontró ${file} en el bundle`)
        return {
          tag: 'link',
          attrs: { rel: 'preload', as: 'image', href: `/${asset.fileName}`, ...attrs },
          injectTo: 'head',
        }
      })
    },
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), preloadHeroImages()],
})
