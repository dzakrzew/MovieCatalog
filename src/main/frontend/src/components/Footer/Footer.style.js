import styled from 'styled-components';
import { darken } from 'polished';

import { COLORS } from '../../helpers/constants';

export const FooterWrapper = styled.footer`
    height: 50px;
    background: ${darken(0.05, COLORS.background)};
    display: flex;
    align-items: center;
    padding-left: 16px;
    color: ${darken(0.5, '#ffffff')};
    font-size: 12px;
`;
