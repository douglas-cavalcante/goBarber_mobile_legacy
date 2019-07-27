import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://192.168.1.7:3333',
});

export default api;
