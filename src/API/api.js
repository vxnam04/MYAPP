import axios from 'axios';

const API_URL = 'http://localhost:3101/api'; // Thay đổi port nếu backend chạy ở port khác

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor để thêm token vào header
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['x-auth-token'] = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const login = (email, password) => api.post('/auth/login', { email, password });
export const register = (username, email, password) => api.post('/auth/register', { username, email, password });
export const getPosts = () => api.get('/posts');
export const createPost = (postData) => api.post('/posts', postData);

export default api;