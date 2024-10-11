import axios from 'axios';

export const baseIntegrationUri = '/integration'

// Configura la instancia de axios
const apiClient = axios.create({
  baseURL: 'https://1r9y6bh0g9.execute-api.us-east-1.amazonaws.com',
  headers: {
    'Content-Type': 'application/json',
  },
  
});

// Interceptores para manejar tokens y errores globales
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.token = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => response,
  error => {
    const status = error.response ? error.response.status : null;
    
    if (status === 401) {
      throw Error('Unauthenticated')
    } else if (status === 403) {
      throw Error('Not Authorized')
    } else {
      throw Error('error from API, status code: ' + status)
    }
  }
);

export default apiClient;
