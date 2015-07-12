'use strict'

import http from 'http'
import router from './lib/router'
import models from './lib/models'

const server    = http.createServer()
const port      = process.env.PORT || 3000
const user      = process.env.DB_USER || 'api'
const db      = process.env.DB_NAME || 'blog'
const pwd      = process.env.DB_PWD || '123456'

function onListening () {
  console.log(`im listening on http://localhost:${port}`)
}

server.on('request', router)
server.on('listening', onListening)

models.sequelize.sync().then(function () {
  server.listen(port);
});
