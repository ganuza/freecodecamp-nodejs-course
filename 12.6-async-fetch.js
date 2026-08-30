// 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log('response: ', response);
    if (!response.ok) {
      throw new Error(`Failed! status: ${response.status}`);
    }
    console.log('***response: ', response);
    const data = await response.json(); // use await here b/c reading the serer stream takes time
    console.log('data: ', data);
  } catch (error) {
    console.log('Fetch Error: ', error);
  }
};

getPosts();

// const getPost = async (id) => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//     );
//     if (!response.ok) {
//       throw new Error(`Failed! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('data: ', data);
//     return data;
//   } catch (error) {
//     console.log('Fetch Error: ', error);
//   }
// };
// getPost(7);

// const getPosts = () => {
//   fetch('https://jsonplaceholder.typicod.com/posts')
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Failed! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => console.log('data: ', data))
//     .catch((error) => console.log('Fetch Error: ', error));
// };
// getPosts();
