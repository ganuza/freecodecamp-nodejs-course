import http, { createServer } from 'http';
// this combines the import for the http module AND the destructuring for the createServer method

console.log('http object: ', http); // to look at the http object

const server = createServer((req, res) => {
  res.write('Welcome to our home page!'); // method to write response
  res.end(); // method that signals to the server that all response headers and body have been sent, closing the active HTTP connection
});
console.log('server: ', server);

server.listen(8000);
