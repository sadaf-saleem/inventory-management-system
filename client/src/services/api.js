import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Port 3000 ko badal kar 5000 kar diya
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;