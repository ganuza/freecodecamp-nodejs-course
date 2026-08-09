const num1 = 4;
const num2 = 13;

function addValues() {
  console.log(`the sum equals ${num1 + num2}`);
}

addValues();
// as you can see, the function is invoked HERE in the module
// this code runs in app.js EVEN without the export, when there is a require set up in the app.js file!
// Why is this useful?
// This is useful when using 3rd party modules
