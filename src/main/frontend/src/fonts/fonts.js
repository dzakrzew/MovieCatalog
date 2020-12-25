import { createGlobalStyle } from 'styled-components';

export const Fonts = createGlobalStyle`
    html, body, * {
      font-family: 'Poppins', sans-serif;
      font-weight: normal;
      scroll-behavior: smooth;
      outline: none !important;
      
      *:focus {
        outline: none !important;
      }
    }
`;
