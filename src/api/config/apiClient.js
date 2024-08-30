import axios from 'axios';

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
    // Puedes añadir tokens de autenticación aquí si es necesario
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores global
    if (error.response && error.response.status === 401) {
      // Lógica para manejar errores 401 (no autorizado)
    }
    return Promise.reject(error);
  },
);

export default apiClient;
