import React from 'react';
import { MovieListItem } from './MovieList.style';

export const MovieList = (props) => {
    if (!props.movies) {
        return <div>Loading movies...</div>;
    }

    if (props.movies.length === 0) {
        return <div>No movies yet.</div>;
    }

    return (
        <div>
            {props.movies.map((movie) => {
                return (
                    <MovieListItem key={movie.id}>
                        <div className={'rating'}>{movie.rating}</div>
                        <div className={'poster'}>
                            <img src={movie.posterImageUrl} />
                            <div className={'plot-wrapper'}>
                                <span className={'plot'}>Plot plot plot</span>
                            </div>
                        </div>
                        <span className={'title'}>{movie.title}</span>
                    </MovieListItem>
                );
            })}
        </div>
    );
};
