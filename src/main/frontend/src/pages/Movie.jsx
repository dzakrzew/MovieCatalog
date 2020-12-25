import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { API_ENDPOINTS, APIGet } from '../helpers/API';
import { PageWrapper } from '../components/PageWrapper';
import { MovieDetails } from '../components/MovieDetails';

export const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const loadData = useCallback(() => {
        APIGet(API_ENDPOINTS.movieById(id)).then(setMovie);
    }, [id]);

    useEffect(() => {
        loadData();
    }, [id, loadData]);

    if (!movie) return null;
    return (
        <PageWrapper pageTitle={movie.movie.title}>
            <MovieDetails {...movie} refetch={loadData} />
        </PageWrapper>
    );
};
