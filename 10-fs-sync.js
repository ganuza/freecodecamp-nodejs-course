// FS Module
// Let's us interact with the File System

// There are 2 flavors:
// Synchronous which is blocking
// Asynchronous which is non-blocking

// For now we are just going to cover the setups
// Later in this course we will cover the differences, and when to use one vs the other

// First let's get the methods we need
import fs from 'fs';
console.log('fs object: ', fs);

// 2 Synchronous methods

// destructure the methods from the fs object you need
const { readFileSync, writeFileSync } = fs;

// our first task is to create a couple of files that we will then read.
// Create a couple of files in content folder named first.txt and second.txt
// Put some text in each

// Now we are going to read from the file system using nodejs using readFileSync

// readFileSync requires 2 parameters:
// 1. the path to the file
// 2. the encoding - so node knows how to decode the file - generally utf8

const firstFileText = readFileSync('./content/first.txt', 'utf8'); // to see list of encoding options, start a second string with ' and you'll see options
const secondFileText = readFileSync('./content/second.txt', 'utf8');

console.log('first and second file text: ', firstFileText, secondFileText); // shows the text in both files

// Now we are going to create a New File using the writeFileSync Method
// It needs 2 arguments:
// 1. file name - writes the file if it doen't exist. If the file already exists, node will overwrite the contents of the file.
// 2. the value we want to pass -  puts in the value
// *** if you want to append the file instead of overwriting it, just pass in one more argument: an options object that includes flag: 'a'

writeFileSync(
  './content/result-write-file-sync.txt',
  `Here is the result: ${firstFileText}, ${secondFileText}`,
  { flag: 'a' },
);
// Run the app.js and you will see the file get created with the new text inside it
// adding the append flag now appends to the text instead of overwriting text in the file
