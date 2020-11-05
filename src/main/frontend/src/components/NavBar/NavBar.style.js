import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';

export const NavBarWrapper = styled.nav`
    height: 60px;
    background-color: ${COLORS.primary};
    display: grid;
    grid-template-columns: 300px auto;
`;
