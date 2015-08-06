import App from '../index'
import Supertest from 'supertest'

let request = new Supertest(App)

describe('Entry Actions', function() {


  it('POST a Entry', function(done) {
    request
      .post('/posts')
      .send({
        title: 'titulo',
        content: 'content'
      })
      .expect(201)
      .end(done);
  });

  it('GET a Entry', function(done) {
    request
      .get('/posts')
      .expect(200)
      .end(function(err, res){
        done();
      });
  });


  it('GET search many Entrys with limit and offset');
  it('PUT change Entry');

});
