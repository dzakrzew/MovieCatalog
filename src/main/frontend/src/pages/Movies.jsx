import React, { useState, useEffect } from 'react';

import { MovieList } from '../components/MovieList';
import { API_ENDPOINTS, APIGet } from '../helpers/API';
import { PageWrapper } from '../components/PageWrapper';

export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        APIGet(API_ENDPOINTS.movieList + '?details=true').then(setMovies);
    }, []);

    // eslint-disable-next-line
    const editorTitle = "Editor's picks";

    return (
        <PageWrapper pageTitle={'Browse'}>
            <MovieList movies={movies} title={'Top picks'} link={'/top-picks'} />
            <MovieList
                movies={movies}
                title={'Fan favorites'}
                link={'/fan-favorites'}
            />
            <MovieList movies={movies} title={editorTitle} link={'/editors-picks'} />
            <MovieList
                movies={movies}
                title={'Recently viewed'}
                link={'/recently-viewed'}
            />
        </PageWrapper>
    );
};
