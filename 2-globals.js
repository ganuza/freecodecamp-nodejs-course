// GLOBALS - NO WINDOW !!!!
// in Node.js there is no Window because there is no browser - sooo, there is no window object.
/*
No window object means there is also
- no querySelector to target nodes
- no built-in fetch
- no browser api's at all
*/

// GLOBALS - there are global variables that you can access from anywhere in your app
// below are the most common

// __dirname - path to current directory
// __filename - file name

// require - function to use modules (CommonJS)
// this is outdated!
// configure your project to use import instead
// you'll need to update your package.json
// add "type": "module" to your project's root package.json
// this forces Node.js to treat all .js files as ES modules

// module - info about current module (file)
// process - info about env where the program is being executed

// you can console.log them:
console.log('directory: ', __dirname);
console.log('module: ', module);
console.log('process', process);

// we do have access to the console
// allows us to console.log

// we have access to SET
// allows us to setTimeout
// allows us to setInterval
setInterval(() => {
  console.log('hello world!');
}, 1000);
