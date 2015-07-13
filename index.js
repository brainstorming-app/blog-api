'use strict'

import http from 'http'
import router from './lib/router'
import models from './lib/models'

const server    = http.createServer()
const port      = process.env.PORT || 3150
const user      = process.env.DB_USER || 'blog'
const db      = process.env.DB_NAME || 'blog'

function onListening () {
  console.log(`im listening on http://localhost:${port}`)
}

server.on('request', router)
server.on('listening', onListening)

models.sequelize.sync().then(function () {
  server.listen(port);
});

export default server
