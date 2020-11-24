import history from '../routes/history';

export const API_LINK = 'http://localhost:8080/api';

export const DEFAULT_HEADERS = {};

export const API_ENDPOINTS = {
    movieList: '/movies/list',
    movieById: (id) => `/movies/${id}`,
};

export const APIGet = async (endpoint, headers = {}) => {
    const response = await fetch(`${API_LINK}${endpoint}`, {
        method: 'GET',
        cache: 'default',
        headers: { ...DEFAULT_HEADERS, ...headers },
    });

    if (response.ok) return response.json();
    if (response.status === 404) history.push('/4xx');
    else history.push('/5xx');
};

export const APIPost = (endpoint, data = {}, headers = {}) =>
    fetch(`${API_LINK}${endpoint}`, {
        method: 'POST',
        cache: 'default',
        headers: { ...DEFAULT_HEADERS, ...headers },
        body: JSON.stringify(data),
    });
