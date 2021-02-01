import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-mern1892.herokuapp.com",
});

export default instance; 