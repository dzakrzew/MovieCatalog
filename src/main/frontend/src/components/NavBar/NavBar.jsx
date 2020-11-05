import React from 'react';
import { Link } from 'react-router-dom';

import { NavBarWrapper } from './NavBar.style';
import { routes } from '../../routes';

import { SearchInput } from './SearchInput.style';
import { LogoWrapper } from './LogoWrapper.style';

import { IoMdSearch } from 'react-icons/all';

import logo from '../../images/logo.png';

export const NavBar = () => {
    return (
        <NavBarWrapper>
            <Link to={routes.Home.path}>
                <LogoWrapper>
                    <img src={logo} alt={'Movie Catalog'} />
                </LogoWrapper>
            </Link>
            <SearchInput>
                <IoMdSearch size={20} />
                <input type={'text'} placeholder={'Search'} />
            </SearchInput>
        </NavBarWrapper>
    );
};
