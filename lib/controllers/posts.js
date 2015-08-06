
import jsonBody from 'body/json'
import models from '../models'
let Post = models.Post

class PostController {

  getAll(req, res) {
      models.Post.findAll({ limit: 10 })
      .then((posts) => {
        res.json(200, posts)
      })
      .then((err) => res.fail(err))
  }

  save(req, res) {
    jsonBody(req, res, (err, body) => {
      if (err) return fail(err, res)

      Post.create(body)
      .then( (post) => {
        res.json(201, post)
      })
      .then((err) => res.fail(err, res))
    })
  }
}

export default PostController
