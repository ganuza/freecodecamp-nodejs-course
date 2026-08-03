const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

module.exports = sayHello; // you don't need to put it into an object since it is only 1 thing

console.log('utils module: ', module); // you see the function in the module.exports object
