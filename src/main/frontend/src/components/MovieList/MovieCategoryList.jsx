import React from 'react';
import PropTypes from 'prop-types';

import {
    MovieListWrapper,
    MovieCategoryListListWrapper,
    MovieListTitle,
} from './MovieList.style';
import { MovieListItem } from './MovieListItem';

export const MovieCategoryList = ({ movies, title }) => {
    if (!movies) return <div>Loading movies...</div>;
    if (movies.length === 0) return null;

    return (
        <MovieListWrapper>
            <MovieListTitle>{title}</MovieListTitle>
            <MovieCategoryListListWrapper>
                {movies.map(({ movie, rating }) => (
                    <MovieListItem key={movie.id} rating={rating} {...movie} />
                ))}
            </MovieCategoryListListWrapper>
        </MovieListWrapper>
    );
};

MovieCategoryList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
};
