import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export const PageWrapper = ({ pageTitle, children }) => (
    <>
        <Helmet>
            <title>{pageTitle} | Movie Catalog</title>
        </Helmet>
        {children}
    </>
);

PageWrapper.propTypes = {
    pageTitle: PropTypes.string,
};
