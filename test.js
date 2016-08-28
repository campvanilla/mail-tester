var mailTest = require('./index.js');
var test = require('tape');

test('should get ACTIVE', function(assert) {

	var email = 'abinav.n.seelan@gmail.com';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, 1);
		assert.equal(data.message, 'ACTIVE');
		assert.end();

	})

})