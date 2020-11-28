import React, { useEffect, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaStar } from 'react-icons/fa';
import { Formik, Field } from 'formik';
import ReactStars from 'react-rating-stars-component';
import { toast } from 'react-toastify';

import {
    AddReviewModalContainer,
    AddReviewModalFooter,
    AddReviewModalHeader,
    AddReviewModalWrapper,
    AddReviewModalMain,
} from './AddReview.style';
import { COLORS } from '../../helpers/constants';
import { API_ENDPOINTS, APIPost } from '../../helpers/API';
import { Button } from '../Button';

const INITIAL_VALUES = {
    comment: '',
    rating: 0,
};

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

    const handleSubmit = async (values) => {
        const response = await APIPost(API_ENDPOINTS.rateMovieById(movieId), values);
        if (response.ok) {
            const message = (await response.json()).message;
            toast.success(message);
            onClose();
            return;
        }
        response.text().then((errorMessage) => {
            toast.error(JSON.parse(errorMessage).message || 'Error occurred');
        });
    };

    return (
        <Formik onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
            {({ handleSubmit, values, setFieldValue, setFieldTouched }) => (
                <AddReviewModalContainer onClick={onClose}>
                    <AddReviewModalWrapper
                        onClick={handleClickWrapper}
                        onSubmit={handleSubmit}
                    >
                        <AddReviewModalHeader>
                            How did you enjoy the movie?
                            <button onClick={onClose}>
                                <FaTimes />
                            </button>
                        </AddReviewModalHeader>
                        <AddReviewModalMain>
                            <label>Rating</label>
                            <ReactStars
                                value={values.rating}
                                isHalf={false}
                                edit={true}
                                size={20}
                                activeColor={COLORS.primary}
                                emptyIcon={<FaStar />}
                                filledIcon={<FaStar />}
                                onChange={(newRate) => {
                                    setFieldValue('rating', newRate);
                                    setFieldTouched('rating', true);
                                }}
                            />
                            <Field
                                name={'comment'}
                                component={'textarea'}
                                placeholder={'Type your review'}
                                rows={'5'}
                                maxLength={'300'}
                            />
                            <span className={'length-indicator'}>
                                {values.comment.length}/300
                            </span>
                        </AddReviewModalMain>
                        <AddReviewModalFooter>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button primary onClick={handleSubmit} type={'submit'}>
                                Submit
                            </Button>
                        </AddReviewModalFooter>
                    </AddReviewModalWrapper>
                </AddReviewModalContainer>
            )}
        </Formik>
    );
};

AddReviewModal.propTypes = {
    movieId: PropTypes.string,
    onClose: PropTypes.func,
};
