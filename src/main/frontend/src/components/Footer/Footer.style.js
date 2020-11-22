import styled from 'styled-components';
import { darken } from 'polished';
import { COLORS } from '../../helpers/constants';

export const FooterWrapper = styled.footer`
    height: 200px;
    background: ${darken(0.05, COLORS.background)};
`;
