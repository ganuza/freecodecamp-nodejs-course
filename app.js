// re-create the readFile() writeFile() setup

import fs, { readFile, writeFile } from 'fs';

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstFileText = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondFileText = result;
    writeFile(
      './content/result-2-write-file-async.txt',
      `Here is the result: ${firstFileText}, ${secondFileText}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log('writeFile result: ', result);
      },
    );
  });
});
