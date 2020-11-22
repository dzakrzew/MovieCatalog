import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../routes';
import { SideBarWrapper, SideBarMenu, SideBarMenuItem } from './SideBar.style';
import { ResponsiveContext } from '../../contexts/ResponsiveContext';

export const SideBar = () => {
    const { isSidebarShown, toggleSidebar } = useContext(ResponsiveContext);

    return (
        <SideBarWrapper className={isSidebarShown ? 'shown' : ''}>
            <SideBarMenu>
                {Object.keys(routes).map(
                    (routeName) =>
                        !routes[routeName].excludeNavBar && (
                            <SideBarMenuItem key={routeName} onClick={toggleSidebar}>
                                <NavLink
                                    to={routes[routeName].path}
                                    exact={routes[routeName].exact}
                                    activeClassName={'active'}
                                >
                                    {routes[routeName].icon}
                                    {routeName}
                                </NavLink>
                            </SideBarMenuItem>
                        )
                )}
            </SideBarMenu>
        </SideBarWrapper>
    );
};
