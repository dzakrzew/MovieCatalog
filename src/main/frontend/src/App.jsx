import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './routes';
import { Layout } from './components/Layout/Layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AppRouter />
            </Layout>
        </BrowserRouter>
    );
}

export default App;
