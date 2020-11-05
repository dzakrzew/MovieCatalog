import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

import { SideBarWrapper, SideBarMenu, SideBarMenuItem } from './SideBar.style';

export const SideBar = () => {
    return (
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarMenuItem>
                    <NavLink
                        to={routes.Home.path}
                        exact={true}
                        activeClassName={'active'}
                    >
                        Home
                    </NavLink>
                </SideBarMenuItem>
                <SideBarMenuItem>
                    <NavLink
                        to={routes.Movies.path}
                        exact={true}
                        activeClassName={'active'}
                    >
                        Movies
                    </NavLink>
                </SideBarMenuItem>
            </SideBarMenu>
        </SideBarWrapper>
    );
};
