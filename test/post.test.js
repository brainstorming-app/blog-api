import App from '../index'
import Supertest from 'supertest'

let request = new Supertest(App)

describe('Entry Actions', function() {
  it('POST a Entry', function(done) {
    request
      .get('/').expect("hola vo", done);
  });

  it('GET a Entry');
  it('GET search many Entrys with limit and offset');
  it('PUT change Entry');

});
