import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (url, options = {}) => {
    try {
        const response = await request.get(url, options);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default request;

// Additional code such as interceptors can be added here if needed
