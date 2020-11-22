import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';

export const PageWrapper = styled.div`
    min-height: 100vh;
`;

export const Main = styled.main`
    background-color: ${COLORS.background};
    min-height: 80vh;
    display: inline-block;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    vertical-align: top;
    font-family: 'Poppins', sans-serif;
    padding: 30px 30px 30px 330px;

    @media (max-width: 768px) {
        padding-left: 30px;
    }

    h1 {
        margin-top: 0;
    }
`;

export const MainWrapper = styled.div`
    display: inline-block;
    min-height: 80vh;
    width: 100%;
`;
