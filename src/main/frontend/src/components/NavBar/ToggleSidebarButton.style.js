import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';

export const ToggleSidebarButton = styled.button`
    width: 40px;
    background: ${COLORS.primary};
    border: 0;
    outline: none;
    padding: 0 10px;
    cursor: pointer;
    margin: 0;
    box-sizing: border-box;
    height: 60px;

    span {
        width: 30px;
        height: 2px;
        background: white;
        display: block;
        &:not(:first-child) {
            margin-top: 7px;
        }
    }

    @media (min-width: 769px) {
        display: none;
    }
`;
