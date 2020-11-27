import React from 'react';
import PropTypes from 'prop-types';

import {
    MovieDetailsPageWrapper,
    MovieDetailsWrapper,
    MovieDetailsHeader,
    MovieDetailsTitle,
    MovieDetailsPlot,
    MovieDetailsSvgLink,
} from './MovieDetails.style';
import { ReactComponent as ImdbLogo } from '../../images/imdb_logo.svg';
import { Comments } from '../Comments';
import { AddReview } from '../AddReview';

export const MovieDetails = ({ movie }) => {
    return (
        <MovieDetailsPageWrapper>
            <MovieDetailsWrapper>
                <MovieDetailsHeader>
                    <MovieDetailsTitle>{movie.title}</MovieDetailsTitle>
                    <span>{movie.year}</span>
                </MovieDetailsHeader>
                <MovieDetailsPlot>
                    <img src={movie.posterImageUrl} alt={movie.title} />
                    <div>
                        <p>{movie.plot}</p>
                        <div>
                            <p>{movie.runtime} min</p>
                            <p>{movie.genre}</p>
                            <p>
                                {movie.country}, {movie.language}
                            </p>
                            <AddReview movieId={movie.id} />
                            <MovieDetailsSvgLink
                                href={`https://www.imdb.com/title/${movie.imdbId}`}
                                target={'_blank'}
                                rel={'nofollow noopener noreferrer'}
                            >
                                <ImdbLogo />
                            </MovieDetailsSvgLink>
                        </div>
                    </div>
                </MovieDetailsPlot>
                <Comments data={[]} />
            </MovieDetailsWrapper>
        </MovieDetailsPageWrapper>
    );
};

MovieDetails.propTypes = {
    movie: PropTypes.object,
    rating: PropTypes.number,
    rates: PropTypes.arrayOf(PropTypes.object),
};
