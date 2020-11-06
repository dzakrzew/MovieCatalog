import React from 'react';
import { MovieList } from '../components/MovieList/MovieList';

export const MoviesPage = () => {
    const movies = [
        {
            id: 1,
            title: 'Film',
            rating: 5.5,
            posterImageUrl: 'http://picsum.photos/200/300?i=1',
        },
        {
            id: 2,
            title: 'Film 2',
            rating: 7.8,
            posterImageUrl: 'http://picsum.photos/200/300?i=2',
        },
    ];

    return (
        <div>
            <h1>Title</h1>
            <MovieList movies={movies} />
        </div>
    );
};
