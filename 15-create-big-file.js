import { writeFileSync } from 'fs';

console.log('writeFileSync: ', writeFileSync);

for (let i = 0; i < 100000; i++) {
  writeFileSync('./content/big-file.txt', 'Hello World!', { flag: 'a' });
}
