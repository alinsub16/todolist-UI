import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_QOUTE_API_URL,
});

export default API;