import React, { useState, useEffect } from 'react';

import { MovieList } from '../components/MovieList';
import { API_ENDPOINTS, APIGet } from '../helpers/API';
import { PageWrapper } from '../components/PageWrapper';

export const MoviesPage = () => {
    const [movies, setMovies] = useState({
        fanFavorites: [],
        editorsPicks: [],
        topPicks: [],
        recentlyViewed: [],
    });

    const updateMovieList = (sectionName) => (data) => {
        setMovies((prevState) => ({ ...prevState, [sectionName]: data }));
    };

    useEffect(() => {
        APIGet(API_ENDPOINTS.movieList + '?details=true&order=fan-favorites').then(
            updateMovieList('fanFavorites')
        );
        APIGet(API_ENDPOINTS.movieList + '?details=true&order=editors-picks').then(
            updateMovieList('editorsPicks')
        );
        APIGet(API_ENDPOINTS.movieList + '?details=true&order=top-picks').then(
            updateMovieList('topPicks')
        );
        APIGet(API_ENDPOINTS.movieList + '?details=true&order=recently-viewed').then(
            updateMovieList('recentlyViewed')
        );
    }, []);

    // eslint-disable-next-line
    const editorTitle = "Editor's picks";

    return (
        <PageWrapper pageTitle={'Browse'}>
            <MovieList
                movies={movies.topPicks}
                title={'Top picks'}
                link={'/top-picks'}
            />
            <MovieList
                movies={movies.fanFavorites}
                title={'Fan favorites'}
                link={'/fan-favorites'}
            />
            <MovieList
                movies={movies.editorsPicks}
                title={editorTitle}
                link={'/editors-picks'}
            />
            <MovieList
                movies={movies.recentlyViewed}
                title={'Recently viewed'}
                link={'/recently-viewed'}
            />
        </PageWrapper>
    );
};
