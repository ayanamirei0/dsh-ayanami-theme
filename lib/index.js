/**
 * dsh-ayanami-theme — host half.
 *
 * The desktop shell serves the GUI from the custom `dsh-app://app` origin, so a
 * `data:` background is not a reliable image source there. This route serves
 * the artwork from the package over the same host the GUI already proxies
 * (`/dsh-boot-animation/...` uses the same mechanism).
 */
import { readFileSync } from 'node:fs'

export const name = 'dsh-ayanami-theme'
export const inject = ['webServer']

export function apply(ctx) {
  let bytes
  try {
    bytes = readFileSync(new URL('../assets/background.jpg', import.meta.url))
  } catch {
    return
  }

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
          res.setHeader('content-type', 'image/jpeg')
          res.setHeader('cache-control', 'public, max-age=31536000, immutable')
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
