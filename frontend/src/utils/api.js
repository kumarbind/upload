// src/utils/api.js
import axios from 'axios';

// Create an axios instance
const api = axios.create({
//   baseURL: 'http://your-domain.com/api',
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// ✅ You can add interceptors if you want (for auth, etc.)
api.interceptors.response.use(
  response => response,
  error => {
    // Handle global errors here (optional)
    return Promise.reject(error);
  }
);

// ✅ Common functions
export const apiGet = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPost = async (url, data = {}) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// You can add PUT, DELETE, etc., in similar way
export default api;
