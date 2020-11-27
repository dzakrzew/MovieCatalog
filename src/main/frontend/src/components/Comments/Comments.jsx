import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { CommentsList, CommentsTitle, CommentsWrapper } from './Comments.style';
import { CommentItem } from './CommentsItem';

const mockData = [
    {
        username: 'Username981',
        rating: 3,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
    {
        username: 'Username982',
        rating: 4,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
    {
        username: 'Username983',
        rating: 3,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
    {
        username: 'Username984',
        rating: 5,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
    {
        username: 'Username985',
        rating: 2,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
    {
        username: 'Username986',
        rating: 2,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
    {
        username: 'Username987',
        rating: 2,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
    {
        username: 'Username988',
        rating: 2,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
    {
        username: 'Username989',
        rating: 2,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
    {
        username: 'Username9810',
        rating: 2,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
    {
        username: 'Username9811',
        rating: 2,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
    {
        username: 'Username9812',
        rating: 2,
        createdAt: '2019-05-23',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sem egestas velit venenatis commodo ac vitae purus. Nullam dolor nunc, bibendum at venenatis a, gravida vitae felis. Nulla feugiat auctor dolor. In vel felis at purus dictum blandit at eget tortor. Aenean nec tellus ultrices, lacinia sem tempus, venenatis arcu. Mauris eget mauris ut enim vulputate commodo. Donec vehicula quis dui vitae efficitur. Donec lacinia, augue sed tincidunt bibendum, elit sem fermentum dui, sed dignissim orci tellus eu lectus.',
    },
];

const COMMENTS_PER_PAGE = 5;
export const Comments = ({ data }) => {
    data = mockData;
    const [commentsCropped, setCommentsCropped] = useState([]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        setCommentsCropped(data.slice(0, COMMENTS_PER_PAGE));
        // eslint-disable-next-line
    }, []);

    const handlePageChange = (page) => {
        setCommentsCropped(
            data.slice(
                page.selected * COMMENTS_PER_PAGE,
                page.selected * COMMENTS_PER_PAGE + COMMENTS_PER_PAGE
            )
        );
        wrapperRef.current?.scrollIntoView();
    };

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
