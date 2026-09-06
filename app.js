import { writeFileSync } from 'fs';

console.log('writeFileSync: ', writeFileSync);

for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big-file', 'Hello World!', { flag: 'a' });
}
