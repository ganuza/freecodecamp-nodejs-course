// use createReadStream to read text from a big file in chunks of 75000 bytes that will be readable in the console.
// make sure that it will log any errors

import { createReadStream } from 'node:fs';

// takes a path to read from and you can optionally pass in a highWaterMark to control the buffer size, and also the encoding to see the data in console
const stream = createReadStream('./content/big-file.txt', {
  highWaterMark: 75000,
  encoding: 'utf8',
});

stream.on('data', (result) => {
  console.log('data: ', result);
});
stream.on('error', (err) => {
  console.log('Error: ', err);
});
