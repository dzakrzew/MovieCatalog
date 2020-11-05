import { createGlobalStyle } from 'styled-components';

import PoppinsRegularFontWoff from './PoppinsRegular.woff';
import PoppinsRegularFontWoff2 from './PoppinsRegular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url(${PoppinsRegularFontWoff2}) format ('woff2'),
        url(${PoppinsRegularFontWoff}) format ('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
