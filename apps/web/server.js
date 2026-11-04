// Calls the API on every page view and shows what came back.
import http from 'node:http'

const PORT = Number(process.env.PORT ?? 3000)
const API_URL = process.env.API_URL ?? 'http://localhost:8080'

http
  .createServer(async (req, res) => {
    if (req.url === '/health') return res.end('ok')
    let body
    try {
      const { visits, store } = await (await fetch(API_URL)).json()
      body = `<h1>${visits}</h1><p>visits, stored in ${store}.</p>`
    } catch {
      body = '<h1>…</h1><p>The API is not reachable yet.</p>'
    }
    res.setHeader('content-type', 'text/html; charset=utf-8')
    res.end(`<!doctype html><meta name=viewport content="width=device-width,initial-scale=1">
<title>Prongo starter</title>
<body style="font-family:system-ui;text-align:center;padding:4rem 1rem">
${body}<p>Deployed with <a href="https://prongo.dev">Prongo</a>. Edit apps/web/server.js and push again.</p>`)
  })
  .listen(PORT, () => console.log(`web on :${PORT}`))
