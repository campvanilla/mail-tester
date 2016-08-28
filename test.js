var mailTest = require('./index.js');
var test = require('tape');

test('should get ACTIVE', function(assert) {

	var email = 'abinav.n.seelan@gmail.com';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '01', 'Checking if CODE = 01');
		assert.equal(data.status, 'ACTIVE', 'Checking if STATUS = ACTIVE');
		assert.end();

	})

})

test('should get DISPOSABLE', function(assert) {

	var email = 'hello@mailinator.com';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '11', 'Checking if CODE = 11');
		assert.equal(data.status, 'DISPOSABLE', 'Checking if STATUS = DISPOSABLE');
		assert.end();

	})

})

test('should get ROBOT', function(assert) {

	var email = 'hello@robot.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '12', 'Checking if CODE = 12');
		assert.equal(data.status, 'ROBOT', 'Checking if STATUS = ROBOT');
		assert.end();

	})

})

test('should get INVALID', function(assert) {

	var email = 'hello@invalid.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '21', 'Checking if CODE = 21');
		assert.equal(data.status, 'INVALID', 'CHECKING if STATUS = INVALID');
		assert.end();

	})

})

test('should get UNKNOWN', function(assert) {

	var email = 'hello@unknown.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '82', 'Checking if CODE = 82');
		assert.equal(data.status, 'UNKNOWN', 'Checking if STATUS = UNKNOWN');
		assert.end();

	})

})

test('should get ERROR', function(assert) {

	var email = 'hello@error.mailtest.in';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '90', 'Checking if CODE = 90');
		assert.equal(data.status, 'ERROR', 'Checking if STATUS = ERROR');
		assert.end();

	})

})

test('should get INVALID_EMAIL', function(assert) {

	var email = 'hello';

	mailTest.check(email, function(data) {
		
		assert.equal(data.code, '00', 'Checking if CODE = 00');
		assert.equal(data.status, 'INVALID_EMAIL', 'Checking if STATUS = INVALID_EMAIL');
		assert.end();

	})

})



