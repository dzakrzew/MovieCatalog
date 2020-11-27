import styled, { css } from 'styled-components';
import { COLORS } from '../../helpers/constants';
import { darken, lighten } from 'polished';

export const paginationStyles = css`
    .pagination {
        display: flex;
        list-style: none;
        width: 100%;
        justify-content: center;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 2px;
            cursor: pointer;

            a {
                display: block;
                padding: 6px 8px;
                color: white;
                user-select: none;

                svg {
                    margin-bottom: -3px;
                }
            }

            :hover a {
                color: ${lighten(0.1, COLORS.primary)};
            }

            a:focus {
                outline: none;
            }
        }

        li.active {
            a {
                color: ${COLORS.primary};
            }
        }

        li.disabled {
            cursor: default;

            a {
                color: ${darken(0.6, '#ffffff')};
            }
        }
    }
`;

export const CommentsWrapper = styled.section`
    display: block;
    margin-top: 48px;
    ${paginationStyles}
`;

export const CommentsTitle = styled.h5`
    display: inline-block;
    color: white;
    font-size: 1.6em;
    margin: 0 0 16px;
    border-left: 3px solid ${COLORS.primary};
    padding-left: 8px;
    font-weight: normal;
`;

export const CommentsList = styled.div``;

export const CommentsListItem = styled.div`
    display: flex;
    margin: 24px 0;

    :first-of-type {
        margin-top: 0;
    }
`;

export const CommentsListItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    background-color: #fff;

    .react-stars {
        margin-left: 24px;
        margin-top: 16px;
    }

    p {
        padding: 8px 24px 24px;
        margin: 0;
    }
`;

export const CommentsListItemContainerHeader = styled.div`
    background-color: ${darken(0.1, COLORS.background)};
    color: ${COLORS.primary};
    padding: 8px 16px;

    span {
        color: white;
        font-size: 0.8em;
        font-weight: 300;
    }
`;

export const CommentsUserAvatar = styled.img`
    width: 64px;
    height: 64px;
    margin-right: 16px;
`;
