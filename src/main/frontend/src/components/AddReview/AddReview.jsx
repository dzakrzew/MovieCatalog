import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { AddReviewModal } from './AddReviewModal';
import { Button } from '../Button';

const MODAL_NODE_ELEMENT = document.getElementById('modals');
export const AddReview = ({ movieId, onNewReview }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPortal = () => setIsOpen(true);
    const handleClosePortal = () => setIsOpen(false);

    return (
        <>
            <Button onClick={handleOpenPortal} primary>
                Add review
            </Button>
            {isOpen &&
                createPortal(
                    <AddReviewModal
                        movieId={movieId}
                        onClose={handleClosePortal}
                        onNewReview={onNewReview}
                    />,
                    MODAL_NODE_ELEMENT
                )}
        </>
    );
};

AddReview.propTypes = {
    movieId: PropTypes.string,
    onNewReview: PropTypes.func,
};
