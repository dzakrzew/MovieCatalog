import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { MovieListItemWrapper } from './MovieList.style';
import { getMovieLinkById } from '../../helpers/linksGenerator';

export const MovieListItem = ({ id, rating, title, plot, posterImageUrl }) => (
    <MovieListItemWrapper key={id}>
        <div className={'rating'}>{rating.toFixed(2)}</div>
        <div className={'poster'}>
            <img src={posterImageUrl} alt={title} />
            <div className={'plot-wrapper'}>
                <span className={'plot'}>{plot}</span>
            </div>
        </div>
        <Link to={getMovieLinkById(id)} className={'title'} title={title}>
            {title}
        </Link>
    </MovieListItemWrapper>
);

MovieListItem.propTypes = {
    id: PropTypes.string,
    rating: PropTypes.number,
    title: PropTypes.string,
    posterImageUrl: PropTypes.string,
    plot: PropTypes.string,
};
