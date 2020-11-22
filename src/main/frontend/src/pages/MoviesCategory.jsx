import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { MovieCategoryList } from '../components/MovieList';
import { API_ENDPOINTS, APIGet } from '../helpers/API';
import { routes } from '../routes';
import { PageWrapper } from '../components/PageWrapper';

export const MoviesCategoryPage = () => {
    const location = useLocation();
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        APIGet(API_ENDPOINTS.movieList + '?details=true').then(setMovies);
    }, []);

    useEffect(() => {
        const currentTitle = Object.keys(routes).find(
            (routeName) => routes[routeName].path === location.pathname
        );
        setTitle(currentTitle);
    }, [location]);

    return (
        <PageWrapper pageTitle={title}>
            <MovieCategoryList movies={movies} title={title} />
        </PageWrapper>
    );
};
