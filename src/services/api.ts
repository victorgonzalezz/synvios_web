import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/victorgonzalezz/api-synvios-web',
  
});

export default api;