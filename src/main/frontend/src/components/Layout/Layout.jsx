import React from 'react';

import { PageWrapper, Main, MainWrapper } from './Layout.style';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar/SideBar';

export const Layout = ({ children }) => {
    return (
        <PageWrapper>
            <NavBar />
            <MainWrapper>
                <SideBar />
                <Main>{children}</Main>
            </MainWrapper>
            <Footer />
        </PageWrapper>
    );
};
