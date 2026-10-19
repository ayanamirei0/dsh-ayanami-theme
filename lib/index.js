/**
 * dsh-ayanami-theme — host half.
 *
 * The desktop shell serves the GUI from the custom `dsh-app://app` origin, so a
 * `data:` background is not a reliable image source there. This route serves
 * the artwork from the package over the same host the GUI already proxies
 * (`/dsh-boot-animation/...` uses the same mechanism).
 *
 * The file is read per request so recoloring the artwork only needs a page
 * refresh, not a DSH restart.
 */
import { readFileSync } from 'node:fs'

export const name = 'dsh-ayanami-theme'
export const inject = ['webServer']

export function apply(ctx) {
  ctx.effect(
    () =>
      ctx.webServer.register({
        kind: 'prefix',
        path: '/dsh-ayanami-theme',
        handler: (req, res) => {
          const path = String(req.url ?? '').split('?')[0]
          if (path !== '/dsh-ayanami-theme/background.jpg') {
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
            bytes = readFileSync(new URL('../assets/background.jpg', import.meta.url))
          } catch {
            res.statusCode = 404
            res.end('artwork missing')
            return
          }

          res.setHeader('content-type', 'image/jpeg')
          res.setHeader('cache-control', 'no-store')
          res.setHeader('content-length', String(bytes.length))
          if (req.method === 'HEAD') {
            res.end()
            return
          }
          res.end(bytes)
        },
      }),
    'dsh-ayanami-theme: artwork route',
  )
}
