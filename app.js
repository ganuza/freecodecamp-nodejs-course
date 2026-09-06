import http, { createServer } from 'http';

// normal way of setting up server
// const server = createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('This is your homepage!');
//   }
// });

// set up using eventEmitter API

const server = createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Homepage using eventEmitter API');
});

server.listen('8000');
