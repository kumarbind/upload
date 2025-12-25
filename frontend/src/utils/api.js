import axios from 'axios';

const api = axios.create({
//   baseURL: 'http://your-domain.com/api',
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const apiGet = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    console.log('response',response);
    
    if (response.data?.message === "Unauthenticated.") {
      localStorage.removeItem("token");
      window.location.replace("/admin/login");
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPost = async (url, data = {}) => {
  try {
    const response = await api.post(url, data);
    console.log('response',response);
    if (response.data?.message === "Unauthenticated.") {
      localStorage.removeItem("token");
      window.location.replace("/admin/login");
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
