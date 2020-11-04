import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';

export const PageWrapper = styled.div`
    min-height: 100vh;
`;

export const Main = styled.main`
    background-color: ${COLORS.background};
    min-height: 80vh;
    padding: 30px;
    font-family: 'Poppins', sans-serif;
    h1 {
        margin-top: 0;
    }
`;

export const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
`;
