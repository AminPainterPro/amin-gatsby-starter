import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.GATSBY_SERVICE_URL,
  timeout: 10000,
  withCredentials: true,
});

export default instance;
