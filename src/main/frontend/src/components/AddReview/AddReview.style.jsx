import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';
import { Form } from 'formik';

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

export const AddReviewModalWrapper = styled(Form)`
    display: inline-block;
    max-height: 90vh;
    width: 600px;
    background: ${darken(0.01, '#ffffff')};
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

export const AddReviewModalMain = styled.main`
    > *:nth-child(2) {
        margin-top: 6px;
        margin-bottom: 16px;
    }

    label:after {
        content: '*';
        color: ${COLORS.primary};
    }

    textarea {
        box-sizing: border-box;
        width: 100%;
        border: none;
        background: #ebebeb;
        color: ${COLORS.background};
        padding: 12px;
        resize: none;
        height: 155px;
    }

    .length-indicator {
        display: block;
        font-size: 0.7em;
        letter-spacing: 0.1em;
        text-align: right;
        width: 100%;
    }
`;
