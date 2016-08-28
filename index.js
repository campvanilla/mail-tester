'use strict';
var mailtester = {},
	request = require('request'),
	MAILTEST_IN_URL = 'http://api.mailtest.in/v1/';

function prevalidate (email){

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

	// return  
	// {
	// 	valid: true,
	// 	email: abc@xyz.abc,
	// 	domain: xyz.abc
	// };
};

mailtester.check = function (email, callback){
	var validated = prevalidate(email), 
		result = {},
		requestURL = '';
	// console.log(validated);
	if(validated.valid) {
		requestURL = MAILTEST_IN_URL + validated.domain;
		console.log(requestURL);
		request(requestURL, function(error, response, body){
			// console.log(response.statusCode);
			// console.log(error);
			// console.log(body);
			body = JSON.parse(body);
			if(!error && response.statusCode == 200){
				result = {
					status: body.status,
					code: body.code,
					message: body.message,
					email: email
				};
				//console.log(result);
				callback(result);
			}
			else {
				result = {
					code: '90',
					message: 'Possible error with Mailtest.in',
					status: 'ERROR',
				};
				//console.log(result);
				callback(result);
			}
		});
	}
	else {
		result = {
			code: '00',
			status: 'INVALID_EMAIL',
			message: 'INVALID EMAIL'
		};
		callback(result);
	}
};

module.exports = mailtester;