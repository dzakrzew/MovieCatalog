import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { AddReviewModal } from './AddReviewModal';

const MODAL_NODE_ELEMENT = document.getElementById('modals');
export const AddReview = ({ movieId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPortal = () => setIsOpen(true);
    const handleClosePortal = () => setIsOpen(false);

    return (
        <>
            <button onClick={handleOpenPortal}>Add review</button>
            {isOpen &&
                createPortal(
                    <AddReviewModal movieId={movieId} onClose={handleClosePortal} />,
                    MODAL_NODE_ELEMENT
                )}
        </>
    );
};

AddReview.propTypes = {
    movieId: PropTypes.string,
};
