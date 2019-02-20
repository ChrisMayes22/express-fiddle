const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('When a request is made to the server', function(){
    it('Given it is a GET to `/`, responds with json containing index.html', function(done){
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect((res) => {
                expect(res.body.msg).to.equal('Router Works');
            })
            .expect(200)
            .end(done);
    })
})