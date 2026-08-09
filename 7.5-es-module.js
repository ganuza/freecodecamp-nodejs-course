const num1 = 7;
const num2 = 9;

function addValues() {
  console.log(`the sum of the numbers is ${num1 + num2}`);
}

const posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
];

const getPosts = () => posts;

export { addValues, posts };

export default getPosts;
