const supertest = require('supertest');
const server = require('../index');
const chai = require('chai');
chai.should();
const api = supertest.agent(server);

describe('websiteLoadingTest', () => {
    it('should connect to the Server', (done) => {
        //Test addition
        api.get('/')
            .end((err, res) => {
                res.status.should.equal(200);
                done();
            });
    });
})

describe('wrongURLInput', () => {
    it('wrong input', (done) => {
        //Test addition
        api.get('/asdfasdf')
            .end((err, res) => {
                res.status.should.equal(200);
                res.body.message.should.equal("A wrong link was entered")
                done();
            });
    });
})

