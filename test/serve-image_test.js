const expect = require('chai').expect;
const request = require('request');

describe('When a get request is made', function(){
    it('to `/`, response object has status code 200 and contains a non-empty body', 
        function(done) {
            request('http://localhost:3000', function(error, res, body){
                expect(res.statusCode).to.equal(200);
                expect(body).to.be.ok
                done();
            }
        )
    });
    it('to `/1.jpeg`, `/2.jpeg`, or`/3.jpeg`, response object has status code 200 and contains a non-empty body', 
        function(done) {
            request('http://localhost:3000/1.jpeg', function(error, res, body){
                expect(res.statusCode).to.equal(200);
                expect(body).to.be.ok
                done();
            }
        )
    });
    it('to a non-matching pathname, response object has status code 200 and contains a non-empty body', 
        function(done) {
            request('http://localhost:3000/RaNDo0m', function(error, res, body){
                expect(res.statusCode).to.equal(404);
                done();
            }
        )
    });
})
