import React, { useState, useEffect } from 'react';

import { MovieList } from '../components/MovieList';
import { API_ENDPOINTS, APIGet } from '../helpers/API';

export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        APIGet(API_ENDPOINTS.movieList + '?details=true').then(setMovies);
    }, []);

    return (
        <div>
            <h1>Title</h1>
            <MovieList movies={movies} />
        </div>
    );
};
