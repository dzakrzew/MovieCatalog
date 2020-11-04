import React from 'react';
import { Link } from 'react-router-dom';

import { NavBarWrapper } from './NavBar.style';
import { routes } from '../../routes';

export const NavBar = () => {
    return (
        <NavBarWrapper>
            <Link to={routes.Home.path}>Home</Link>
            &nbsp;
            <Link to={routes.Movies.path}>Movies</Link>
        </NavBarWrapper>
    );
};
