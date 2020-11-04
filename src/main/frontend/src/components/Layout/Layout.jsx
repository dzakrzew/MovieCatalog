import React from 'react';

import { PageWrapper, Main } from './Layout.style';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';

export const Layout = ({ children }) => {
    return (
        <PageWrapper>
            <NavBar />
            <Main>{children}</Main>
            <Footer />
        </PageWrapper>
    );
};
