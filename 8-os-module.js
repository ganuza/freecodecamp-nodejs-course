// CommonJS
// const os = require('os'); // for built-in modules we omit the './'

// ES Module
import os from 'os';

// info about current user
const currentUser = os.userInfo();
console.log('currentUser: ', currentUser);

// method returns system uptime in seconds
console.log('uptime: ', os.uptime());

// a few more methods
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log('current OS: ', currentOS);
