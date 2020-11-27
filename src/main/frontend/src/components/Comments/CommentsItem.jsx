import React from 'react';
import PropTypes from 'prop-types';
import formatDistance from 'date-fns/formatDistance';
import ReactStars from 'react-rating-stars-component';
import { FaStar } from 'react-icons/fa';

import {
    CommentsListItem,
    CommentsListItemContainer,
    CommentsListItemContainerHeader,
    CommentsUserAvatar,
} from './Comments.style';
import { COLORS } from '../../helpers/constants';

export const CommentItem = ({ username, createdAt, rating, comment }) => {
    return (
        <CommentsListItem>
            <CommentsUserAvatar
                src={
                    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y&d=wavatar'
                }
                alt={'ko'}
            />
            <CommentsListItemContainer>
                <CommentsListItemContainerHeader>
                    {username}{' '}
                    <span>
                        rated{' '}
                        {formatDistance(new Date(createdAt), new Date(), {
                            addSuffix: true,
                        })}
                    </span>
                </CommentsListItemContainerHeader>
                <ReactStars
                    value={rating}
                    isHalf={false}
                    edit={false}
                    size={20}
                    activeColor={COLORS.primary}
                    emptyIcon={<FaStar />}
                    filledIcon={<FaStar />}
                />
                <p>{comment}</p>
            </CommentsListItemContainer>
        </CommentsListItem>
    );
};

CommentItem.propTypes = {
    username: PropTypes.string,
    comment: PropTypes.string,
    createdAt: PropTypes.string,
    rating: PropTypes.number,
};
