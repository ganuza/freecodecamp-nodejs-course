// npm - global command, comes with nodejs when we installed it
// npm --version: gives you the version of npm installed - just type it in your terminal

// 2 types of dependencies:
// 1. Local dependency - used only in the current project
//    Command: npm i <packageName>

// 2. Global dependency - use it in any project
//    Command: npm i -g <packageName>
//             sudo install -g <packageName>

// WE STILL NEED A PACKAGE.JSON FILE
// package.json - manifest file (stores important info about project/package)
// 3 ways to create a package.json
// 1. Manual approach (create package.json in the root, create properties etc)
// 2. npm init (step by step approach, press enter to skip)
// 3. npm init -y (everything default) - use this as you can always go back and change properties

// Why do we need the package.json???
// 1. We want any installed packages to be listed in the dependencies property
//   Initializing npm creates the package.json
//   When you install the first dependency, a node_modules directory is created if it doesn't already exist
//   If a package NEEDS other dependencies, those will be installed as well
//   node_modules is where ALL of the dependencies are stored
// 2. We need to provide information about our project

////////////////// Actual Code //////////////////////

// write npm init -y in the terminal and execute
// now you see a package.json file has been created

// Initialize ES Modules
// in package.json between main and scripts properties, let's put in the ES modules code that let's you use import / export functionality instead of commonJS
// "type": "module"

// Install lodash, a utility library so we can see what happens when we install a new module
// npm i lodash
// now we see that a node_modules directory has been created with lodash inside
// a new package-lock.json directory was also created
// lodash was also added to the dependencies property in the package.json object

// Let's use lodash
// we want to use the flattenDeep method

// const _ = require('lodash') // this is the commonjs way

// // es modules alternative:
// import _ from 'lodash';
// console.log('lodash: ', _ ); // shows you the properties of lodash - we see the flattenDeep method is there
// // this imports ALL properties and is very heavy weight!

// BEST PRACTICE import for specific properties instead of whole lodash library:
import { flattenDeep } from 'lodash-es';

const items = [1, [2, [3, [4]]]];

const flatItems = flattenDeep(items);
console.log('flatItems: ', flatItems);
