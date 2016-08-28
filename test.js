var mailTest = require('./index.js');
var test = require('tape');

test('should get ACTIVE', function(assert) {

	var email = 'abinav.n.seelan@gmail.com';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '01');
		assert.equal(data.status, 'ACTIVE');
		assert.end();

	})

})

test('should get DISPOSABLE', function(assert) {

	var email = 'hello@mailinator.com';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '02');
		assert.equal(data.status, 'DISPOSABLE');
		assert.end();

	})

})

test('should get ROBOT', function(assert) {

	var email = 'hello@robot.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '03');
		assert.equal(data.status, 'ROBOT');
		assert.end();

	})

})

test('should get INVALID', function(assert) {

	var email = 'hello@invalid.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '04');
		assert.equal(data.status, 'INVALID');
		assert.end();

	})

})

test('should get UNKNOWN', function(assert) {

	var email = 'hello@unknown.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '05');
		assert.equal(data.status, 'ACTIVE');
		assert.end();

	})

})

test('should get ERROR', function(assert) {

	var email = 'hello@error.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '06');
		assert.equal(data.status, 'ERROR');
		assert.end();

	})

})

test('should get INVALID_EMAIL', function(assert) {

	var email = 'hello';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '00');
		assert.equal(data.status, 'INVALID_EMAIL');
		assert.end();

	})

})



