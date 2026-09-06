// create an even bigger text file
// create a server that streams the data from the huge text file

// 1. go to 15-create-big-file and add another 0 to the loop and run it in app.js to create a huge file.

// 2. create a server
import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';

const server = createServer((req, res) => {
  if (req.url === '/') {
    res.write('homepage');
    const stream = createReadStream('./content/big-file.txt', {
      highWaterMark: 75000,
      encoding: 'utf8',
    });
    stream.on('open', () => {
      stream.pipe(res);
    });
  }
});

server.listen('8000');
// 3. create code to stream to server
