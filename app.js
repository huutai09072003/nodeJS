
const EventEmitter = require('events');

const Myevent= new EventEmitter;

Myevent.on('Start', function () {
    console.log('APPLY EVENT!');
});

Myevent.emit('Start');
