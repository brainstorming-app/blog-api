
import jsonBody from 'body/json'
import { fail, jsonfy } from 'api-helpers'
import Post from '../models/post'

class PostController {

  getAll(req, res) {
    Post
      .find({}, 'title')
      .then((employees) => {
        res.statusCode = 200
        res.end(jsonfy('OK', employees))
      })
      .then((err) => fail(err, res))
  }
}

export default PostController
