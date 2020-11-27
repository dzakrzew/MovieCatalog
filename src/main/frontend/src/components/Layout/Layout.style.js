import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';

export const PageWrapper = styled.div`
    height: 100vh;
    overflow: hidden;
`;

export const Main = styled.main`
    background-color: ${COLORS.background};
    box-sizing: border-box;
    padding: 32px 48px;
    flex: 1;
    overflow-y: auto;

    @media (max-width: 768px) {
        padding-left: 30px;
    }

    h1 {
        margin-top: 0;
    }
`;

export const MainWrapper = styled.div`
    display: flex;
    width: 100%;
    height: calc(100% - 110px);
`;
