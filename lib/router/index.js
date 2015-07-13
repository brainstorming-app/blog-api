'use strict'

import course from 'course'
import logger from '../utils/logger'
import PostController from '../controllers/post'

const router = course()

router.all((req, res, next) => {
  logger.info(req.method, req.url)
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('x-ver', '1.0')
  next()
})

router.get('/',       (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end("hola vo");
})
//router.get('/posts',  PostController.getAll)


function onRequest (req, res) {
  router(req, res, (err) => {
    if (err) return fail(err, res)

    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end(`404 Not Found: ${req.url}`)
  })
}

export default onRequest
