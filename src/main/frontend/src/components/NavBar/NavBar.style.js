import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';
import { lighten } from 'polished';

export const NavBarWrapper = styled.nav`
    height: 60px;
    background-color: ${lighten(0.1, COLORS.primary)};
    display: grid;
    grid-template-columns: 300px auto;

    @media (max-width: 768px) {
        grid-template-columns: 100px auto;
        img {
            display: none !important;
        }
        .logoButtons {
            display: grid;
            grid-template-columns: 50px 50px;
        }
    }
`;
