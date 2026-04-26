Aim: Implement Event Emitter Object in Node.js

var events = require('events');

var event Emitter = new events. EventEmitter();

var myEventHandler = function () {

    console.log('I hear a laugh!');

    console.log('The laugh is so adorable.')

}

eventEmitter.on('laugh', myEventHandler);

eventEmitter.emit('laugh');
