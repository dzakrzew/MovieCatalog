import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
    MovieListWrapper,
    MovieListListWrapper,
    MovieListTitleLink,
} from './MovieList.style';
import { MovieListItem } from './MovieListItem';

export const MovieList = ({ movies, title, link }) => {
    const wrapperRef = useRef(null);
    const [movieList, setMovieList] = useState([]);

    const handleResizeWindow = useCallback(() => {
        if (!wrapperRef.current) return;
        const wrapper = wrapperRef.current;

        const itemListOptimalWidth = 185;
        const itemListGap = 24;

        // Include first element without gap
        let wrapperWidth =
            wrapper.getBoundingClientRect().width - itemListOptimalWidth;
        let itemToDisplay = 1;

        while (wrapperWidth - (itemListOptimalWidth + itemListGap) > 0) {
            itemToDisplay += 1;
            wrapperWidth -= itemListOptimalWidth + itemListGap;
        }

        setMovieList(movies.slice(0, itemToDisplay));
    }, [movies]);

    useEffect(() => {
        handleResizeWindow();
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, [handleResizeWindow]);

    if (!movies) return <div>Loading movies...</div>;
    if (movies.length === 0) return null;

    return (
        <MovieListWrapper ref={wrapperRef}>
            <MovieListTitleLink to={link}>{title}</MovieListTitleLink>
            <MovieListListWrapper>
                {movieList.map(({ movie, rating }) => (
                    <MovieListItem key={movie.id} rating={rating} {...movie} />
                ))}
            </MovieListListWrapper>
        </MovieListWrapper>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    link: PropTypes.string,
};
