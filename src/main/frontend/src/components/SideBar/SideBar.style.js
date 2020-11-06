import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';
import { darken } from 'polished';

export const SideBarWrapper = styled.div`
    background: ${(props) => darken(0.1, COLORS.background)};
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
    }
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
