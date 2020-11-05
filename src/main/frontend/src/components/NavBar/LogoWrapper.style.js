import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';
import { darken } from 'polished';

export const LogoWrapper = styled.div`
    text-align: center;
    background: ${(props) => darken(0.1, COLORS.primary)};
    & > img {
        height: 30px;
        padding: 15px;
    }
`;
