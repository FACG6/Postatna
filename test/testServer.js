const test = require('tape');

let num = 2;
tape('Test tape', (t)=> {
	t.equal(2, 2,'hhhh')
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

test('Testing style.css Content', (t) => {
	supertest(router)
		.get('/public/css/style.css')
		.expect(200)
		.expect('content-type', 'text/css')
		.end((err, res) => {
			t.error(err);
			t.equal(res.text.includes('body') && res.text.includes(' padding: 0'), true, 'pass')
			t.end();
		})
})

test('Testing handleStatics: dom.js', (t) => {
	supertest(router)
		.get('/public/js/dom.js')
		.expect(200)
		.expect('content-type', 'text/javascript')
		.end((err) => {
			t.error(err);
			t.end();
}
}

