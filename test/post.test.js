import App from '../index'
import Supertest from 'supertest'

let request = new Supertest(App)

describe('Post', function() {
  it('write a post', function(done) {
    request
      .get('/').expect("hola vo", done);
  });
});
