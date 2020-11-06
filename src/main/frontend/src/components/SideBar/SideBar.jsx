import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

import { SideBarWrapper, SideBarMenu, SideBarMenuItem } from './SideBar.style';
import { ResponsiveContext } from '../../contexts/ResponsiveContext';

export const SideBar = () => {
    return (
        <ResponsiveContext.Consumer>
            {({ isSidebarShown, toggleSidebar }) => (
                <SideBarWrapper className={isSidebarShown ? 'shown' : ''}>
                    <SideBarMenu>
                        <SideBarMenuItem onClick={toggleSidebar}>
                            <NavLink
                                to={routes.Home.path}
                                exact={true}
                                activeClassName={'active'}
                            >
                                Home
                            </NavLink>
                        </SideBarMenuItem>
                        <SideBarMenuItem onClick={toggleSidebar}>
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
            )}
        </ResponsiveContext.Consumer>
    );
};
