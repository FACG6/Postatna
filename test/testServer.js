const test = require('tape');

let num = 2;
test('Test tape', (t)=> {
	t.equal(2, 2,'pass')
	t.end()
});

test('Testing handleStatics: style.css', (t)=>{
	supertest(router)
		.get('/public/css/style.css')
		.expect(200)
		.expect('content-type', 'text/css')
		.end((err) => {
			t.error(err);
			t.end();
		})
})

// test('Testing style.css Content', (t) => {
// 	supertest(router)
// 		.get('/public/css/style.css')
// 		.expect(200)
// 		.expect('content-type', 'text/css')
// 		.end((err, res) => {
// 			t.error(err);
// 			t.equal(res.text.includes('.h') && res.text.includes(' padding: 0;'), true, 'pass')
// 			t.end();
// 		})
// })

test('Testing handleStatics: dom.js', (t) => {
	supertest(router)
		.get('/public/js/dom.js')
		.expect(200)
		.expect('content-type', 'text/javascript')
		.end((err) => {
			t.error(err);
			t.end();
		})
})


const supertest = require('supertest');
const router = require('../src/router');

test('Internal Server Error', (t) => {
  supertest(router)
    .get('/blog')
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

