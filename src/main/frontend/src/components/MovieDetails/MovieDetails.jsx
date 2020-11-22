import React from 'react';
import PropTypes from 'prop-types';

import {
    MovieDetailsWrapper,
    MovieDetailsHeader,
    MovieDetailsTitle,
    MovieDetailsPlot,
} from './MovieDetails.style';

export const MovieDetails = ({ movie }) => {
    return (
        <MovieDetailsWrapper>
            <MovieDetailsHeader>
                <MovieDetailsTitle>{movie.title}</MovieDetailsTitle>
            </MovieDetailsHeader>
            <MovieDetailsPlot>
                <img src={movie.posterImageUrl} alt={movie.title} />
                <p>{movie.plot}</p>
            </MovieDetailsPlot>
        </MovieDetailsWrapper>
    );
};

MovieDetails.propTypes = {
    movie: PropTypes.object,
    rating: PropTypes.number,
    rates: PropTypes.arrayOf(PropTypes.object),
};
