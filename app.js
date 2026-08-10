// import the path module
import path from 'path';

// Path Separator Property (.sep)
console.log('path separator: ', path.sep); // returns / (forward slash that is used by macOS)
//////////////////////////////////////////////////////////////

// Path.join() Method
// create a folder named content
// create another folder inside content named subfolder
// create a file called test.txt in the subfolder
// write test txt in the file
// use .join() method to return the normalized path
const filePath = path.join('/content', 'subfolder', 'test.txt'); // pass in the folders and file
console.log('file path: ', filePath); // this returns the normalized file path /content/subfolder/test.txt
///////////////////////////////////////////////////////////////

// basename() Method
// base name - the last portion of the file path

console.log('base name: ', path.basename(filePath)); // returns test.txt
/////////////////////////////////////////////////////////////////

// Resolve Method (path.resolve())
// in ES Modules, we can't use __dirname
// instead, we need to use import.meta.dirname
console.log(
  'absolute path: ',
  path.resolve(import.meta.dirname, 'content', 'subfolder', 'test.txt'),
); // returns /Users/adrianzabolitzki/dev/learning/nodejs/freecodecamp-nodejs-course/content/subfolder/test.txt

// Why would we EVER want this???
// Our app is going to run in different environments such as Heroku for example, and we'll need to get that environment's absolute path if we want to get to some kind of resource
