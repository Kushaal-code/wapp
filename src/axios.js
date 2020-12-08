import axios from 'axios'

// const instance=axios.create({
//     baseURL: "http://localhost:9000",
// });

const instance=axios.create({
    baseURL: "https://arcane-peak-83255.herokuapp.com",
});

export default instance;