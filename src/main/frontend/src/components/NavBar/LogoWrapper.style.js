import styled from 'styled-components';

import { COLORS } from '../../helpers/constants';
import logo from '../../images/logo.png';
import logoSquare from '../../images/logo-square.png';

export const LogoWrapper = styled.div`
    text-align: center;
    background: ${COLORS.primary};
    & > div {
        height: 30px;
        width: 150px;
        padding: 15px;
        display: inline-block;
        background-image: url(${logo});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    @media (max-width: 768px) {
        & > div {
            background-image: url(${logoSquare});
            width: 40px;
            padding: 15px 0;
        }
    }
`;
