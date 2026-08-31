import { EventEmitter } from 'node:events';

const customEmitter = new EventEmitter(); // this creates instance of EventEmitter
console.log('customEmitter: ', customEmitter);

// Basic Methods

// customEmitter.on('response', () => {
//   // 'response' is the name of the event
//   console.log(`data received`);
// });

// customEmitter.on('response', () => {
//   console.log(`some other logic here`);
// });

// customEmitter.emit('response'); // the strings NEED TO MATCH!!!!

//////////// Methods with Arguments ///////////////

customEmitter.on('response', (name, id) => {
  // you can use the args from the emitter
  console.log(`data received for ${name}. id num = ${id}`);
});
customEmitter.on('response', () => {
  console.log(`some other logic`);
});
customEmitter.emit('response', 'John', 34); // you can add other arguments
