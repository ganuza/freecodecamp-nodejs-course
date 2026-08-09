// Modules - Encapsulated Code (only share the minimum)

// we'll be running our code by executing one file
// BUT, we'll be splitting our code into modules
// it would be insane to jam all of our code into one file
// modules allow us to separate code into separate files that we can access throughout our application
// this allows us to have smaller files and add structure to our app

// add the require assignment to get access to the variables from 4-names.js
const names = require('./4-names');
// here we could have destructured: { john, peter } = require('./4-names')

console.log('names: ', names); // this shows us the object with our {john: 'john', peter: 'peter'}
// this proves we now have access to the variables

// only 1 more thing: we need access to our function in the utils file
const sayHi = require('./5-utils');

// Now we can import our alternative export methods as data

const data = require('./6-alternative-exports');
console.log('data: ', data);

// import for 5.5-object-export
const name = require('./5.5-object-export');
console.log('object name: ', name); // you exported person.name

sayHi('Susan');
sayHi(names.john);

require('./7-mind-grenade');
// This runs the function that is invoked in the 7-mind-grenade file
// WHEN YOU IMPORT A MODULE, YOU ACTUALLY INVOKE IT!!!
//
