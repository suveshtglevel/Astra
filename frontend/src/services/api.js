const BASE_URL = 'http://localhost:3000/api';

const handleResponse = async (response) => {
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
    }
    return data;
};

export const api = {
    // Auth
    register: (userData) => fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
        credentials: 'include'
    }).then(handleResponse),

    login: (credentials) => fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
        credentials: 'include'
    }).then(handleResponse),

    logout: () => fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include'
    }).then(handleResponse),

    // Chat
    sendMessage: (message) => fetch(`${BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
        credentials: 'include'
    }).then(handleResponse),

    getHistory: () => fetch(`${BASE_URL}/chat/history`, {
        credentials: 'include'
    }).then(handleResponse),
};
