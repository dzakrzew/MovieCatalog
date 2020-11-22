import React, { useState } from 'react';
import { Router } from 'react-router-dom';

import { AppRouter } from './routes';
import { Layout } from './components/Layout';
import { ResponsiveContext } from './contexts/ResponsiveContext';
import history from './routes/history';

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
        <Router history={history}>
            <ResponsiveContext.Provider
                value={{ ...responsiveContextState, toggleSidebar }}
            >
                <Layout>
                    <AppRouter />
                </Layout>
            </ResponsiveContext.Provider>
        </Router>
    );
};
