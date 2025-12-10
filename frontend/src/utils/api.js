import axios from 'axios';

// Base URL for API - update this when backend is ready
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
  
});
// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Server responded with error
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const tweetAPI = {
  // Get trending topics
  getTrendingTopics: (params) => api.get('/tweets/trending', { params }),
  
  // Get sentiment analysis
  getSentimentAnalysis: (params) => api.get('/tweets/sentiment', { params }),
  
  // Get recent tweets
  getRecentTweets: (params) => api.get('/tweets/recent', { params }),
  
  // Search tweets
  searchTweets: (query, params) => api.get(`/tweets/search?q=${query}`, { params }),
  
  // Get analytics data
  getAnalytics: (params) => api.get('/analytics', { params }),
  
  // Get dashboard stats
  getDashboardStats: () => api.get('/dashboard/stats'),
};

export const userAPI = {
  // Get top influencers
  getTopInfluencers: (params) => api.get('/users/influencers', { params }),
  
  // Get user details
  getUserDetails: (userId) => api.get(`/users/${userId}`),
};

export default api;
