import http, { createServer } from 'http';
// this combines the import for the http module AND the destructuring for the createServer method

console.log('http object: ', http); // to look at the http object

const server = createServer((req, res) => {
  console.log('req: ', req); // gigantic request object - for now we only want to talk about the property that gets us the url

  console.log('***req.url: ', req.url); // url property tells us what address (endpoint) the client is requesting.
  // it is sent along with a bunch of other useful data

  if (req.url === '/') {
    res.write('Welcome to our home page!'); // method to write response
    res.end(); // method that signals to the server that all response headers and body have been sent, closing the active HTTP connection
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
  }
  res.end(`
    <h1>OOPS!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href='/'>back home</a>
    `);
});

console.log('*** server: ', server);

server.listen(8000);

// *** When you make changes while the server is spun up, you need to quit it and restart so the changes take effect.
// You will also need to refresh your webpage, since the server is waiting on a request
