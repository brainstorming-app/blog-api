'use strict'

import course from 'course'
import logger from '../utils/logger'
import PostController from '../controllers/posts'

const postController = new PostController();

const router = course()

router.all((req, res, next) => {
  logger.info(req.method, req.url)
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('x-ver', '1.0')
  res.json = function(status, object) {
    res.statusCode = status
    res.end(JSON.stringify(object))
  }
  res.fail = function(err) {
    res.json(500, err)
  }
  next()
})

router.get('/posts', (req, res, next) => {
  next();
}, postController.getAll)

router.post('/posts',  postController.save)

router.get('/',       (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end("hola vo");
})




function onRequest (req, res) {
  router(req, res, (err) => {
    if (err) return fail(err, res)

    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end(`404 Not Found: ${req.url}`)
  })
}

export default onRequest
