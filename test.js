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

test('should get DISPOSABLE', function(assert) {

	var email = 'hello@mailinator.com';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, 2);
		assert.equal(data.message, 'DISPOSABLE');
		assert.end();

	})

})

test('should get ROBOT', function(assert) {

	var email = 'hello@robot.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, 3);
		assert.equal(data.message, 'ROBOT');
		assert.end();

	})

})

test('should get INVALID', function(assert) {

	var email = 'hello@invalid.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, 4);
		assert.equal(data.message, 'INVALID');
		assert.end();

	})

})

test('should get UNKNOWN', function(assert) {

	var email = 'hello@unknown.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, 5);
		assert.equal(data.message, 'ACTIVE');
		assert.end();

	})

})

test('should get ERROR', function(assert) {

	var email = 'hello@error.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, 5);
		assert.equal(data.message, 'ERROR');
		assert.end();

	})

})

test('should get INVALID_EMAIL', function(assert) {

	var email = 'hello';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, 0);
		assert.equal(data.message, 'INVALID_EMAIL');
		assert.end();

	})

})



