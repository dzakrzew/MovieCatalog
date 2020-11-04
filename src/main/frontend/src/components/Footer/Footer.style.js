import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';
import { darken } from 'polished';

export const FooterWrapper = styled.footer`
    height: 200px;
    background: ${(props) => darken(0.05, COLORS.background)};
`;
