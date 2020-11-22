import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './routes';
import { Layout } from './components/Layout';
import { ResponsiveContext } from './contexts/ResponsiveContext';

export const App = () => {
    const [responsiveContextState, setResponsiveContextState] = useState({
        isSidebarShown: false,
        isMobile: false,
    });

    const toggleSidebar = () => {
        setResponsiveContextState((prevState) => ({
            isSidebarShown: !prevState.isSidebarShown,
        }));
    };

    return (
        <BrowserRouter>
            <ResponsiveContext.Provider
                value={{ ...responsiveContextState, toggleSidebar }}
            >
                <Layout>
                    <AppRouter />
                </Layout>
            </ResponsiveContext.Provider>
        </BrowserRouter>
    );
};
