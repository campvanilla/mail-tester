# Mail-tester - An easier way to test emails 

![Build Status](https://travis-ci.org/campvanilla/mail-tester.svg?branch=master)

Mail-tester is npm module, that uses [MailTest] to easily check whether an email being used in your node application is
- a valid email ID
- a disposable email ID
- a robot domain
- an invalid email ID



## Installation

```sh
  npm install mail-tester 
```

## API

First *require* the package in your application

```sh
  var mailTester = require('mail-tester');
```



The `mailTester` object exposes the following functions:

### mailTester.check(email, callback)

This function takes an email and a callback as parameter. The email is checked and the result of the check is sent as a parameter to the callback.

**Example:** 

```sh
  var mailTester = require('mail-tester');
  
  var email = test@gmail.com;
  
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

A detailed table of all the response codes, statuses and messages can be found below

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


[MailTest]: http://www.mailtest.in
