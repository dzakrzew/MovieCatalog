import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { NavBarWrapper } from './NavBar.style';
import { routes } from '../../routes';
import { SearchInput } from './SearchInput.style';
import { LogoWrapper } from './LogoWrapper.style';
import { ToggleSidebarButton } from './ToggleSidebarButton.style';
import { IoMdSearch } from 'react-icons/all';
import { ResponsiveContext } from '../../contexts/ResponsiveContext';

export const NavBar = () => {
    const { isSidebarShown, toggleSidebar } = useContext(ResponsiveContext);
    return (
        <NavBarWrapper>
            <div className={'logoButtons'}>
                <Link to={routes.Browse.path}>
                    <LogoWrapper>
                        <div />
                    </LogoWrapper>
                </Link>
                <ToggleSidebarButton
                    onClick={toggleSidebar}
                    className={`toggleButton ${isSidebarShown ? 'toggled' : ''}`}
                >
                    <span />
                    <span />
                    <span />
                </ToggleSidebarButton>
            </div>
            <SearchInput>
                <IoMdSearch size={20} />
                <input
                    type={'text'}
                    placeholder={'Search'}
                    onFocus={(e) => {
                        e.target.placeholder = '';
                    }}
                    onBlur={(e) => {
                        e.target.placeholder = 'Search';
                    }}
                />
            </SearchInput>
        </NavBarWrapper>
    );
};
