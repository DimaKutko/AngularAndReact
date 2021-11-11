const events = require('events');
const mongoose = require('mongoose');

const myEmit = new events.EventEmitter();

myEmit.on('connection', () => {
    console.log('DB connected');
});

myEmit.on('disconnection', (e) => {
    console.log(`Error connected to db - ${e}`);
});

async function start() {
    try {
        await mongoose.connect('mongodb+srv://dima:qwerty123456@cluster0.cnwmb.mongodb.net/todos');
        myEmit.emit('connection');

    } catch (e) {
        myEmit.emit('disconnection', e);
    }
}

start()