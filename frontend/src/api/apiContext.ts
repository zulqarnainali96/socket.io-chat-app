import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_baseURL,
  
  timeout: 8000, // request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  
});

// Add response interceptor for error handling
apiClient.interceptors.response.use(
    response => response,
    error => {
    if (error.response) {
      // Server responded with a status code outside 2xx
      console.error('Error response:', error.response.status);
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
)
export default apiClient;
