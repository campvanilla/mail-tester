'use strict';
var request = require('request');

var mailTester = {},
	MAILTEST_IN_URL = 'http://api.mailtest.in/v1/';

var prevalidate = function (email){

	var pattern = /^[a-zA-z0-9._]+[@][a-zA-Z0-9]+[.][a-zA-Z0-9.]+$/;
	var result = {};

	if (email.match(pattern)) {
		result.valid = true;
		result.email = email;
		result.domain = email.substring(email.indexOf("@")+1,email.length);
	} else {
		result.valid = false;
		result.email = email;
		result.domain = "n/a";
	}

	return result;
};

var handleMailtestResponse = function (error, response, body){
	var responseStatusCode = parseInt(response.statusCode, 10);
	if(!error && responseStatusCode === 200){
		return {
			code: body.code,
			status: body.status,
			message: body.message
		};
	}
	else if(responseStatusCode === 429){
		return {
			code: body.code,
			status: body.status,
			message: 'Mailtest rate-limit exceeded.'
		};
	}
	else if(responseStatusCode === 500){
		return {
			code: '92',
			status: 'ERROR',
			message: 'Mailtest.in Internal Server Error.'
		};
	}
	else if(error){
		return {
			code: '89',
			status: 'ERROR',
			message: error
		};
	}
	else {
		return {
			code: '90',
			message: 'Possible error with Mailtest.in',
			status: 'ERROR'
		};
	}
};

mailTester.check = function (email, callback){
	var validated = prevalidate(email), 
		result = {},
		requestURL = '';

	if(validated.valid) {
		requestURL = MAILTEST_IN_URL + validated.domain;
		
		request(requestURL, function(error, response, body){
			error = JSON.parse(error);
			body = JSON.parse(body);
			return callback(handleMailtestResponse(error, response, body));
		});
	}
	else {
		result = {
			code: '00',
			status: 'INVALID_EMAIL',
			message: 'INVALID EMAIL'
		};
		return callback(result);
	}
};

module.exports = mailTester;