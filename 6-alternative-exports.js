// set up a couple of different data types
// const items = ['item1', 'item2', 'item3'];
const person = {
  name: 'bob',
};

// but instead of doing it this way, let's export as we go:
module.exports.items = ['item1', 'item2'];
// this works because we are setting up an items property on the module.exports object

// we can also do it this way:
module.exports.singlePerson = person;
// same here, we set a singlePerson property on the module.exports object and assign it to our person object

// when you console log the module exports property, you see that both data types were added as properties
// you'll see the module.exports contains 2 propeties now, 1 for each export
console.log('module exports: ', module.exports);
