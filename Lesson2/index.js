// const http = require('http');

// const server = http.createServer();
// server.on('request', (req, res) => {
//     res.end('Start server...');
// });

// server.listen(8000, () => {
//     console.log('Hello from node js');
// });

// const events = require('events');

// const myEmit = new events.EventEmitter();

// myEmit.on('eve', (text) => {
//     console.log(text);
// });

// myEmit.on('eve', (text) => {
//     console.log(text + '123');
// });

// myEmit.emit('eve', 'Hello form node js');

// const strPlus = require('str_plus_str');

// const str = new strPlus('aaa', 'bbb');

// console.log(str.getStr());

// const events = require('events')
// const EventEmitter = events.EventEmitter
// class Group extends EventEmitter {
//     constructor(name) {
//         super()
//         this.name = name
//     }
// }
// let group1 = new Group('KN213');
// let group2 = new Group('OS-061');
// let groups = [group1, group2];

// groups.forEach(function(group) {
//     group.on('average', function(grade) {
//         console.log(group.name + ". Average grade:" + grade);
//     });
// });

// group1.emit('average', 10);
// group2.emit('average', 7);