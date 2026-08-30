// re-create the readFile() writeFile() setup

import fs, { readFile, writeFile } from 'fs';

// create a new function to get text using promise
// we want to take in a path and return a promise
// then move the readFile function into the new function
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      const firstFileText = result;
      resolve(result);
    });
  });
};

const showText = async () => {
  try {
    const firstText = await getText('./content/first.txt');
    console.log('Success: ', firstText);
    const secondText = await getText('./content/second.txt');
    console.log('Success: ', secondText);
  } catch (error) {
    console.log('Failed: ', error);
  }
};

showText();

// now we can invoke getText and it is going to return a promise
// we can now chain a .then and .catch for the error

// first text
getText('./content/first.txt')
  .then((result) => console.log(result))
  .catch((err) => console.log('*Error: ', err));

//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const secondFileText = result;
//     writeFile(
//       './content/result-2-write-file-async.txt',
//       `Here is the result: ${firstFileText}, ${secondFileText}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         }
//         console.log('writeFile result: ', result);
//       },
//     );
//   });
// });
