import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

import { COLORS } from '../../helpers/constants';

export const MovieListWrapper = styled.section`
    margin-top: 32px;
    &:first-of-type {
        margin-top: 0;
    }
`;

export const MovieListListWrapper = styled.div`
    display: grid;
    grid-auto-rows: 0;
    grid-template-rows: 1fr;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
`;

export const MovieCategoryListListWrapper = styled(MovieListListWrapper)`
    grid-auto-rows: 1fr;
    grid-gap: 32px 24px;
`;

const MovieListTitleStyles = css`
    display: inline-block;
    color: white;
    font-size: 1.5em;
    margin: 0 0 16px;
    border-left: 3px solid ${COLORS.primary};
    padding-left: 8px;
    text-decoration: none;
`;

export const MovieListTitle = styled.div`
    ${MovieListTitleStyles}
`;

export const MovieListTitleLink = styled(Link)`
    ${MovieListTitleStyles}
    :hover {
        text-decoration: underline;
    }
`;

export const MovieListItemWrapper = styled.div`
    position: relative;
    overflow: hidden;

    .poster {
        position: relative;
        overflow: hidden;
        height: 300px;
        & > img {
            width: 100%;
            height: 100%;
            transition: transform 0.3s;
            transform: scale(1);
            will-change: transform;
        }
        .plot-wrapper {
            z-index: 3;
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            transition: transform 0.3s;
            padding: 10px;
            transform: translateY(100%);
            will-change: transform;

            .plot {
                color: white;
                font-size: 0.9em;
            }
        }
    }
    .rating {
        position: absolute;
        right: 10px;
        top: 10px;
        background: ${COLORS.primary};
        font-weight: bold;
        font-size: 0.9em;
        color: white;
        padding: 5px;
        z-index: 2;
        transition: transform 0.2s;
        transform: translateX(0);
        will-change: transform;
    }
    .title {
        display: block;
        font-size: 1em;
        letter-spacing: 0.03125em;
        padding: 16px 8px;
        color: white;
        background-color: ${darken(0.05, COLORS.background)};
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-decoration: none;
    }

    .title:hover {
        text-decoration: underline;
    }

    &:hover {
        .plot-wrapper {
            transform: translateY(0);
        }
        & img {
            transform: scale(1.1);
        }
        .rating {
            transform: translateX(50px);
        }
    }
`;
