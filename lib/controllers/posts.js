
import jsonBody from 'body/json'
import models from '../models'

class PostController {

  getAll(req, res) {
      models.Post.findAll({ limit: 10 })
      .then((posts) => {
        res.json(200, posts)
      })
      .then((err) => res.fail(err))
  }

  save(req, res) {
    models.Post.create(req.body)
    .then(function(post) {
      res.json(201, post)
    })
  }
}

export default PostController
