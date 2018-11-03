import axios from 'axios';

// import { promises } from 'fs';
// import { resolve } from 'dns';

// const getDogs = () => {
//   return new promises((resolve, reject) => {
//     axios.get('https://random-dogs-api.herokuapp.com/dogs/23')
//       .then((data) => {
// const leanData = data.data.dogs;
//         resolve(data);
//       })
//       .catch((err) => {
//         reject(err);
//       })
//   });
// }

const getDogs = () => axios.get('https://random-dogs-api.herokuapp.com/dogs/23');

export default getDogs;
