const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('When a request is made to the server', function(){
    it('Given it is a GET to `/`, responds with text/html containing index.html', function(done){
        request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .end(done);
    })
    it('Given it is a GET to `raND0M`, responds with a 404', function(done){
        request(app)
            .get('/raND0M')
            .expect(404)
            .end(done);
    })
    
})
