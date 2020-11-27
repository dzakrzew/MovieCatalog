import styled, { css } from 'styled-components';
import { darken, lighten, transparentize } from 'polished';
import { COLORS } from '../../helpers/constants';

export const AddReviewModalContainer = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AddReviewModalWrapper = styled.section`
    display: inline-block;
    max-height: 90vh;
    width: 700px;
    background: ${darken(0.03, '#ffffff')};
    box-shadow: 0 14px 38px ${transparentize(0.88, '#ffffff')},
        0 10px 10px ${transparentize(0.88, '#ffffff')};

    > * {
        padding: 16px 32px;
    }
`;

export const AddReviewModalHeader = styled.header`
    position: relative;
    border-bottom: 1px solid ${lighten(0.01, COLORS.background)};
    font-size: 1.2em;
    font-weight: bold;
    color: ${COLORS.background};

    button {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 16px;
        width: 24px;
        height: 24px;
        top: 50%;
        background: transparent;
        border: none;
        margin: 0;
        padding: 4px;
        transform: translateY(-50%);
        border-radius: 100px;
        color: inherit;
        cursor: pointer;

        :hover {
            background: ${lighten(0.72, COLORS.background)};
        }

        svg {
            fill: currentColor;
            width: 16px;
            height: 16px;
        }
    }
`;

export const AddReviewModalFooter = styled.footer`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid ${lighten(0.01, COLORS.background)};
`;

export const AddReviewModalFooterButton = styled.button`
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
