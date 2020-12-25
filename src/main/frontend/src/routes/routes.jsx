import React from 'react';
import {
    FaHome,
    FaFireAlt,
    FaHeart,
    FaLayerGroup,
    FaBookmark,
} from 'react-icons/fa';

import { MoviePage, MoviesPage, MoviesCategoryPage } from '../pages';

export const routes = {
    Browse: {
        path: '/',
        exact: true,
        children: <MoviesPage />,
        icon: <FaHome />,
    },
    Movie: {
        path: '/movies/:id',
        exact: true,
        children: <MoviePage />,
        excludeNavBar: true,
    },
    'Top picks': {
        path: '/top-picks',
        exact: true,
        children: <MoviesCategoryPage order={'top-picks'} />,
        icon: <FaFireAlt />,
    },
    'Fan favorites': {
        path: '/fan-favorites',
        exact: true,
        children: <MoviesCategoryPage order={'fan-favorites'} />,
        icon: <FaHeart />,
    },
    // eslint-disable-next-line
    'Editor\'s picks': {
        path: '/editors-picks',
        exact: true,
        children: <MoviesCategoryPage order={'editors-picks'} />,
        icon: <FaLayerGroup />,
    },
    'Recently viewed': {
        path: '/recently-viewed',
        exact: true,
        children: <MoviesCategoryPage order={'recently-viewed'} />,
        icon: <FaBookmark />,
    },
};
