# Mail-tester - An easier way to test emails 

![Build Status](https://travis-ci.org/campvanilla/mail-tester.svg?branch=master)
[![Code Climate](https://codeclimate.com/github/campvanilla/mail-tester/badges/gpa.svg)](https://codeclimate.com/github/campvanilla/mail-tester)
[![Test Coverage](https://codeclimate.com/github/campvanilla/mail-tester/badges/coverage.svg)](https://codeclimate.com/github/campvanilla/mail-tester/coverage)

Mail-tester is an npm module, that uses the [MailTest-API] to easily check whether an email being used in your node application is
- a valid email ID
- a disposable email ID
- a robot domain
- an invalid email ID

## Installation

```sh
$ npm install mail-tester 
```

## API

First *require* the package in your application

```sh
$ var mailTester = require('mail-tester');
```

The `mailTester` object exposes the following functions:

### mailTester.check(email, callback)

This function takes an email and a callback as parameters. It checks the email against the [Mailtest-API] and passes the result through a parameter in the callback function.

**Example:** 

```js
var mailTester = require('mail-tester');
  
var email = 'test@gmail.com';
  
mailTester.check(email, function(data) {
  console.log(data);
})
```

The output of the above snippet would be 

```sh
{ 
  code: '01', 
  status: 'ACTIVE', 
  message: 'OK' 
}
```

## Response Types

The following types of responses may be returned for a given test email.

| Code | Status     | Message |
|------|------------|---------|
| 01   | ACTIVE     | OK      |
| 11   | DISPOSABLE | Disposable Email   |
| 12   | ROBOT      | Monetized Bounce   |
| 21   | INVALID    | Invalid Domain     |
| 22   | INVALID    | Unregistered Domain|
| 23   | INVALID    | No MX Records Found|
| 81   | UNKNOWN    | WhoIs Lookup Error |
| 82   | UNKNOWN    | DNS Lookup Error   |
| 91   | ERROR      | Rate Limit Exceeded|
| 92   | ERROR      | Internal Server Error |

----------

**Note:** MailTest limits their service to 120 requests per hour per IP. 

## Licence

[MIT](https://github.com/campvanilla/mail-tester/blob/master/LICENSE)
[MailTest-API]: http://www.mailtest.in
