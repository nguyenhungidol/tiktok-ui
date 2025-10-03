import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (url, options = {}) => {
    try {
        const response = await httpRequest.get(url, options);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default httpRequest;

// Additional code such as interceptors can be added here if needed
