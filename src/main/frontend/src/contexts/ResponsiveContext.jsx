import React from 'react';

export const ResponsiveContext = React.createContext({
    isMobile: false,
    isSidebarShown: false,
    toggleSidebar: () => {},
});
