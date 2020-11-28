import React, { useState, useEffect } from 'react';
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
import { getRandomUsername } from '../../helpers/linksGenerator';

export const CommentItem = ({ username, createdAt, rating, comment }) => {
    const [tempUsername, setTemp] = useState('joe');

    useEffect(() => {
        getRandomUsername().then(setTemp);
    }, []);

    if (comment.length === 0) return null;

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
                    {tempUsername}{' '}
                    <span>
                        rated{' '}
                        {formatDistance(new Date(), new Date(), {
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
