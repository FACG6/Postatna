cosnt test = require('tape');
const supertest = require('supertest');
const routerNotFound = require('../src/handlers/notFoundSrver');

test('NotFound', (t) => {
    supertest(routerNotFound)
        .get('/hhhhh')
        .expect(404)
        .expect('content-type', /html/)
        .end((err, res) => {
            if (err) t.error(err)
            t.equal(res.text.includes('page not found'), true, 'shoude retun html file');
            t.end();
        })
})