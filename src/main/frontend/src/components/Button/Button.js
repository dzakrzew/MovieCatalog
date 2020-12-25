import styled, { css } from 'styled-components';
import { COLORS } from '../../helpers/constants';
import { darken, lighten } from 'polished';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    padding: 8px 16px;
    cursor: pointer;

    ${(props) =>
        props.primary
            ? css`
                  background: ${COLORS.primary};
                  color: white;

                  :hover {
                      background: ${darken(0.1, COLORS.primary)};
                  }
              `
            : css`
                  background: transparent;
                  color: ${COLORS.background};
                  border-color: ${COLORS.background};

                  :hover {
                      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.75);
                      background: ${lighten(0.75, COLORS.background)};
                  }
              `}

    :focus {
        outline: none;
    }

    :not(:first-of-type) {
        margin-left: 8px;
    }
`;
