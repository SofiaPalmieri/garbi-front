import axios from 'axios';

export const baseIntegrationUri = '/public-api'

// Configura la instancia de axios
const apiClient = axios.create({
  baseURL: 'http://localhost:3005',
  headers: {
    'Content-Type': 'application/json',
  },
  
});

// Interceptores para manejar tokens y errores globales
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => response,
);

export default apiClient;
