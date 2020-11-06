import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';

export const MovieListItem = styled.div`
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0;
    display: inline-block;
    position: relative;
    vertical-align: top;
    .poster {
        position: relative;
        overflow: hidden;
        height: 300px;
        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .plot-wrapper {
            z-index: 3;
            box-sizing: border-box;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            transition: top 0.5s;
            padding: 10px;
            .plot {
                color: white;
                font-size: 0.9em;
            }
        }
        &:hover {
            .plot-wrapper {
                top: 0%;
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
    }
    .title {
        font-size: 1.2em;
        margin-top: 10px;
        display: block;
        color: white;
    }
`;
