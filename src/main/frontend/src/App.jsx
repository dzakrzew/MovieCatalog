import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './routes';
import { Layout } from './components/Layout/Layout';
import { ResponsiveContext } from './contexts/ResponsiveContext';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleSidebar = () => {
            this.setState((state) => ({
                isSidebarShown: !state.isSidebarShown,
            }));
        };

        this.state = {
            isSidebarShown: false,
            toggleSidebar: this.toggleSidebar,
            isMobile: false,
        };
    }

    render() {
        return (
            <BrowserRouter>
                <ResponsiveContext.Provider value={this.state}>
                    <Layout>
                        <AppRouter />
                    </Layout>
                </ResponsiveContext.Provider>
            </BrowserRouter>
        );
    }
}

export default App;
