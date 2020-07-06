import axios from 'axios';

const api = axios.create({
    baseURL: 'https://henriquecavalcanteapi.herokuapp.com/'
});

export default api;