export const API_LINK = 'http://localhost:8000';

export const DEFAULT_HEADERS = {};

export const API_ENDPOINTS = {
    movieList: '/movies',
};

export const APIGet = async (endpoint, data = {}, headers = {}) =>
    fetch(`${API_LINK}${endpoint}`, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'default',
        headers: { ...DEFAULT_HEADERS, ...headers },
        body: JSON.stringify(data),
    });

export const APIPost = async (endpoint, data = {}, headers = {}) =>
    fetch(`${API_LINK}${endpoint}`, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'default',
        headers: { ...DEFAULT_HEADERS, ...headers },
        body: JSON.stringify(data),
    });
