import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';

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
import { COLORS } from '../../helpers/constants';

export const MovieDetails = ({ movie, rates, refetch, rating }) => {
    return (
        <MovieDetailsPageWrapper>
            <MovieDetailsWrapper>
                <MovieDetailsHeader>
                    <MovieDetailsTitle>{movie.title}</MovieDetailsTitle>
                    <span>{movie.year}</span>
                </MovieDetailsHeader>
                <ReactStars
                    value={rating}
                    isHalf={false}
                    edit={false}
                    size={32}
                    activeColor={COLORS.primary}
                    emptyIcon={<FaStar />}
                    filledIcon={<FaStar />}
                />
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
                            <AddReview movieId={movie.id} onNewReview={refetch} />
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
                <Comments data={rates.filter((rate) => rate.comment).reverse()} />
            </MovieDetailsWrapper>
        </MovieDetailsPageWrapper>
    );
};

MovieDetails.propTypes = {
    movie: PropTypes.object,
    rating: PropTypes.number,
    rates: PropTypes.arrayOf(PropTypes.object),
    refetch: PropTypes.func,
};
