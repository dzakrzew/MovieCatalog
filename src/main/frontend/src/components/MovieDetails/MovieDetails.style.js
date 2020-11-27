import styled from 'styled-components';

export const MovieDetailsPageWrapper = styled.section`
    display: flex;
`;

export const MovieDetailsWrapper = styled.div`
    display: inline-block;
    margin: 0 auto;

    & > * {
        width: 100%;
    }
`;

export const MovieDetailsHeader = styled.div`
    display: flex;

    span {
        margin-top: auto;
        margin-left: auto;
        padding-bottom: 6px;
        font-size: 1.5em;
        color: white;
    }
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

    > div {
        display: flex;
        flex-direction: column;
        padding-left: 16px;
        p {
            color: white;
            max-width: 600px;
            margin: 0;
        }

        > div {
            margin-top: auto;
            p {
                margin-bottom: 8px;
            }
        }
    }
`;

export const MovieDetailsSvgLink = styled.a`
    display: block;
    margin-top: 8px;
`;
