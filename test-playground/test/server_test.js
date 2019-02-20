const request = require('supertest');
const app = require('../server').app;
const expect = require('chai').expect


describe('When HTTP requests are made', function(){
    it('to `/`, should return a Hello World response', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect((res) => {
                expect(res.body.greeting).to.equal('Hello world!')
            })
            .end(done);
    })
    it('to `/users`, should return an array of uses that includes Kitten and her password', (done)=>{
        request(app)
            .get('/users')
            .expect(200)
            .expect((res)=>{
                expect(res.body).to.deep.include({name: 'Kitten', password: 'meow'});
            })
            .end(done);
    })
})


