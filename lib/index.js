/**
 * dsh-ayanami-theme — host half.
 *
 * The desktop shell serves the GUI from the custom `dsh-app://app` origin, so
 * media is delivered through the same host the GUI already proxies. Assets are
 * read per request so recoloring or replacing them only needs a page refresh.
 */
import { readFileSync } from 'node:fs'

export const name = 'dsh-ayanami-theme'
export const inject = ['webServer']

const ASSETS = new Map([
  ['/dsh-ayanami-theme/background.jpg', ['background.jpg', 'image/jpeg']],
  ['/dsh-ayanami-theme/smile.mp4', ['smile.mp4', 'video/mp4']],
  ['/dsh-ayanami-theme/mark.png', ['mark.png', 'image/png']],
])

export function apply(ctx) {
  ctx.effect(
    () =>
      ctx.webServer.register({
        kind: 'prefix',
        path: '/dsh-ayanami-theme',
        handler: (req, res) => {
          const path = String(req.url ?? '').split('?')[0]
          const asset = ASSETS.get(path)
          if (asset === undefined) {
            res.statusCode = 404
            res.end('not found')
            return
          }
          if (req.method !== 'GET' && req.method !== 'HEAD') {
            res.statusCode = 405
            res.end()
            return
          }

          let bytes
          try {
            bytes = readFileSync(new URL(`../assets/${asset[0]}`, import.meta.url))
          } catch {
            res.statusCode = 404
            res.end('asset missing')
            return
          }

          res.setHeader('content-type', asset[1])
          res.setHeader('cache-control', 'no-store')
          res.setHeader('content-length', String(bytes.length))
          if (req.method === 'HEAD') {
            res.end()
            return
          }
          res.end(bytes)
        },
      }),
    'dsh-ayanami-theme: media routes',
  )
}
