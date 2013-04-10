node-pushover
=============

node.js pushover module for https://pushover.net/api

## Install

You can install node-pushover using the Node Package Manager (npm):

    npm install node-pushover

## Initialization

### new Pushover({ token: "APPTOKEN" [, user: "USERKEY"]});

Initializes a Pushover object with the __APPTOKEN__ and optionally a __USERKEY__ . The __USERKEY__ can also be given when sending the messages.

## Sending messages

### push.send({options})

User and app token are inherited from initialization. You may optionally pass either in the options hash to override.


```js
var Pushover = require('node-pushover');
var push = new Pushover({
	token: "APPTOKEN",
	user: "USERKEY"
});

push.send({
	title: 'yo',
	message: 'some shit went down.',
	url: '...',
	sound: 'magic',
	//...any other API param...
});


```

