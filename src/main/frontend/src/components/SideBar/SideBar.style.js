import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';
import { darken } from 'polished';

export const SideBarWrapper = styled.div`
    background: ${(props) => darken(0.1, COLORS.background)};
`;

export const SideBarMenu = styled.ul`
    margin: 0;
    padding: 0;
    margin-top: 30px;
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
