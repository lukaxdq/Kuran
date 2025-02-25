import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error('Login failed');
    }
};

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch posts');
    }
};

export const fetchPostById = async (postId) => {
    try {
        const response = await axios.get(`${API_URL}/posts/${postId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch post');
    }
};

export const submitComment = async (postId, comment) => {
    try {
        const response = await axios.post(`${API_URL}/posts/${postId}/comments`, comment);
        return response.data;
    } catch (error) {
        throw new Error('Failed to submit comment');
    }
};