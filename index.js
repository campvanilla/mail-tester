'use strict';
var mailtester = {},
	request = require('request'),
	MAILTEST_IN_URL = 'http://api.mailtest.in/v1/';

function prevalidate (email){
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

	if(validated.valid) {
		requestURL = MAILTEST_IN_URL + validated.domain;
		request(requestURL, function(error, response, body){
			if(!error && response.statusCode === 200){
				result = {
					status: body.status,
					code: body.code,
					message: body.message,
					email: email
				};
				callback(result);
			}
			else {
				//something
			}
		});
	}
	else {
		result = {
			code: 0,
			status: 'ERROR',
			message: 'INVALID_EMAIL'
		};
		callback(result);
	}
};

mailtester.checkThese = function (){

};

module.exports = mailtester;