import http, { createServer } from 'http';

const server = createServer((req, res) => {
  // use the url property that is sent along with the http request to send response to see that the server is working
  if (req.url === '/') {
    res.write(`Here's your home page!`);
    res.end();
  } else if (req.url === '/info') {
    res.end(`Here's some info about us!`);
    // proper if, else if, and else statements are necessary here. You can NOT call res.end() multiple times for a single request.
    // Node.js does NOT allow sending headers and data more than once per request
  } else {
    res.end(`
    <h1>OOPS!</h1>
    <p>We can't find that page!</p>
    <a href='/'>back home</a>
    `);
  }
});

server.listen(8000);
