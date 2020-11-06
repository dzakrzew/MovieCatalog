import styled from 'styled-components';

export const SearchInput = styled.div`
    * {
        height: 30px;
        position: relative;
        top: 15px;
        left: 15px;
        vertical-align: top;
        color: white;
    }
    input {
        word-wrap: nowrap;
        left: 0;
        padding-left: 20px;
        background: transparent;
        border: 0;
        max-width: 500px;
        font-family: 'Poppins', sans-serif;
        caret-color: white;
        &::placeholder {
            color: white;
        }
        &:focus {
            outline: none;
        }
    }
`;
