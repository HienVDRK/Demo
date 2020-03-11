const express = require('express')
const next = require('next')
const port = process.env.PORT || 3500
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/detail/:id', (req, res) => {
      app.render(req, res, '/detail', { id: req.params.id })
    })

    server.get('/detail2/:id', (req, res) => {
      app.render(req, res, '/detail2', { id: req.params.id })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) {
        throw err
      }
      console.warn(`Ready on http://localhost:${port}`)
    })
  }).catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
