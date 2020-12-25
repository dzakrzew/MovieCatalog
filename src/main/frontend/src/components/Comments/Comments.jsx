import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { CommentsList, CommentsTitle, CommentsWrapper } from './Comments.style';
import { CommentItem } from './CommentsItem';

const COMMENTS_PER_PAGE = 5;
export const Comments = ({ data }) => {
    const [commentsCropped, setCommentsCropped] = useState([]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        setCommentsCropped(data.slice(0, COMMENTS_PER_PAGE));
        // eslint-disable-next-line
    }, [data]);

    const handlePageChange = (page) => {
        setCommentsCropped(
            data
                .filter((rate) => rate.comment)
                .slice(
                    page.selected * COMMENTS_PER_PAGE,
                    page.selected * COMMENTS_PER_PAGE + COMMENTS_PER_PAGE
                )
        );
        wrapperRef.current?.scrollIntoView();
    };

    if (data.length === 0) return null;

    return (
        <CommentsWrapper ref={wrapperRef}>
            <CommentsTitle>Rates</CommentsTitle>
            <CommentsList>
                {commentsCropped.map((comment, index) => (
                    <CommentItem key={index} {...comment} />
                ))}
            </CommentsList>
            <ReactPaginate
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(data.length / COMMENTS_PER_PAGE)}
                onPageChange={handlePageChange}
                initialPage={0}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                disabledClassName={'disabled'}
                previousLabel={<FaAngleLeft />}
                nextLabel={<FaAngleRight />}
            />
        </CommentsWrapper>
    );
};

Comments.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf),
};
