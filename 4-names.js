// local
const secret = 'SUPER SECRET';
// share
const john = 'john';
const peter = 'peter';

console.log('module: ', module); // you'll see your module object
// you'll see that there is a property on it that is 'exports'
// exports is an object of whatever you are exporting
// the way CommonJS works is that whatever you put into that
// exorts object, you'll be able to access anywhere in the app
// WE decide what goes into that export object

// Now we can assign something to the module.exports property

module.exports = { john, peter };

console.log('module after export: ', module);
