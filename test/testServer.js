const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router');

test('Internal Server Error', (t) => {
  supertest(router)
    .get('/jjjjj')
    .expect(500)
    .expect('content-type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      }
      t.equal(typeof res, 'object', 'should return object');
      t.end();
    });
});
