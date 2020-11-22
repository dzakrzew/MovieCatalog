import styled from 'styled-components';

export const MovieDetailsWrapper = styled.section`
    max-width: 1200px;
    margin: 0 auto;

    & > * {
        width: 100%;
    }
`;

export const MovieDetailsHeader = styled.div`
    display: flex;
`;

export const MovieDetailsTitle = styled.h1`
    margin: 0;
    font-size: 3em;
    color: white;
    font-weight: normal;
    letter-spacing: 0.03125em;
`;

export const MovieDetailsPlot = styled.div`
    margin-top: 32px;
    display: flex;

    img {
        height: auto;
    }

    p {
        padding-left: 16px;
        color: white;
        max-width: 600px;
        margin: 0;
    }
`;

export const MovieDetailsRates = styled.div`
    margin: 0;
    font-size: 2em;
    color: white;
`;
