import axios from 'axios';
import type { AxiosInstance } from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

function createApiInstance(): AxiosInstance {
  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  return api;
}

const apiInstance = createApiInstance();

export default apiInstance;
