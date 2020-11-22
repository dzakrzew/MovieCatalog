import styled from 'styled-components';
import { darken } from 'polished';

import { COLORS } from '../../helpers/constants';

export const SideBarWrapper = styled.div`
    background: ${darken(0.1, COLORS.background)};
    width: 300px;
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 9999;
    height: 100%;
    transition: left 0.5s;
    @media (max-width: 768px) {
        left: -90%;
        width: 90%;
        &.shown {
            left: 0;
        }
    }
`;

export const SideBarMenu = styled.ul`
    padding: 0;
    margin: 30px 0 0;
`;

export const SideBarMenuItem = styled.li`
    margin: 0;
    padding: 0;
    a {
        box-sizing: border-box;
        width: 100%;
        text-decoration: none;
        padding: 15px;
        display: inline-block;
        letter-spacing: 1px;
        color: white;
        font-family: 'Poppins', sans-serif;
        &.active {
            background: ${COLORS.background};
            color: ${COLORS.primary};
        }
        &:hover {
            background: ${COLORS.background};
        }
    }
`;
