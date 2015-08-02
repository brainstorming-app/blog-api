import App from '../index'
import Supertest from 'supertest'

let request = new Supertest(App)

describe('Entry Actions', function() {

  it('GET a Entry', function(done) {
    request
      .get('/posts')
      .expect("[]", done);
  });

  /*it('POST a Entry', function(done) {
    request
      .post('/posts')
      .expect(201)
      .end(done);
  });*/

  it('POST a Entry');
  it('GET search many Entrys with limit and offset');
  it('PUT change Entry');

});
