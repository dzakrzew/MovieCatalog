import React, { useEffect, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

import {
    AddReviewModalContainer,
    AddReviewModalFooter,
    AddReviewModalFooterButton,
    AddReviewModalHeader,
    AddReviewModalWrapper,
} from './AddReview.style';

export const AddReviewModal = ({ movieId, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleClickWrapper = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <AddReviewModalContainer onClick={onClose}>
            <AddReviewModalWrapper onClick={handleClickWrapper}>
                <AddReviewModalHeader>
                    Add review
                    <button onClick={onClose}>
                        <FaTimes />
                    </button>
                </AddReviewModalHeader>
                <div>
                    <textarea />
                </div>
                <AddReviewModalFooter>
                    <AddReviewModalFooterButton onClick={onClose}>
                        Cancel
                    </AddReviewModalFooterButton>
                    <AddReviewModalFooterButton primary>
                        Submit
                    </AddReviewModalFooterButton>
                </AddReviewModalFooter>
            </AddReviewModalWrapper>
        </AddReviewModalContainer>
    );
};

AddReviewModal.propTypes = {
    movieId: PropTypes.string,
    onClose: PropTypes.func,
};
