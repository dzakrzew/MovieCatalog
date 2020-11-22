import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { API_ENDPOINTS, APIGet } from '../helpers/API';
import { PageWrapper } from '../components/PageWrapper';

export const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        APIGet(API_ENDPOINTS.movieById(id)).then(setMovie);
    }, [id]);

    if (!movie) return null;
    return (
        <PageWrapper pageTitle={movie.movie.title}>{movie.movie.title}</PageWrapper>
    );
};
