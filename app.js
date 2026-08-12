import fs from 'fs';
console.log('fs: ', fs);

const { readFile, writeFile } = fs; // destructure the methods you want

// Asynchronous Approach to interacting with the file system
// the way it works is by providing a callback
// basically we run the callback function when we're done
// similar to a button click, where we run the callback function when we click the button
// there are 2 parameters to the callback function: err and result

// as with readFileSync, we need to pass the path and encoding, then
// then we add the callback function with the err and result params
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstFileText = result;
  console.log('first text: ', firstFileText);
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondFileText = result;
    console.log('second text: ', secondFileText);
    writeFile(
      './content/result-write-file-async.txt',
      `Here is the result: ${firstFileText}, ${secondFileText}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      },
    );
  });
});
