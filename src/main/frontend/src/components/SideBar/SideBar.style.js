import styled from 'styled-components';
import { darken, opacify } from 'polished';

import { COLORS } from '../../helpers/constants';

export const SideBarWrapper = styled.div`
    background: ${darken(0.1, COLORS.background)};
    width: 300px;
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
        padding: 16px 32px;
        display: block;
        letter-spacing: 1px;
        color: ${darken(0.1, '#ffffff')};
        font-family: 'Poppins', sans-serif;
        border-left: 3px solid transparent;
        &.active,
        &.active:hover {
            background: ${COLORS.background};
            color: ${COLORS.primary};
            border-color: ${COLORS.primary};
            box-shadow: inset 16px 0 24px -24px ${opacify(1, COLORS.primary)};
        }

        &:hover {
            color: white;
            background: ${darken(0.5, COLORS.background)};
        }
    }
    svg {
        margin-right: 16px;
        transform: translateX(0);
        transition: all 0.2s linear;
        will-change: transform;
    }
    :hover {
        svg {
            transform: translateX(-10px);
        }
    }
`;
