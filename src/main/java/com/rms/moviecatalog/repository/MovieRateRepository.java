package com.rms.moviecatalog.repository;

import com.rms.moviecatalog.dto.IMovieIdRating;
import com.rms.moviecatalog.model.Movie;
import com.rms.moviecatalog.model.MovieRate;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRateRepository extends CrudRepository<MovieRate, Long> {

    @Query(value = "SELECT AVG(`rating`) FROM `movie_rate` WHERE HEX(`movie_id`) = ?1", nativeQuery = true)
    Double getMovieRatingById(String id);

    @Query(value = "SELECT HEX(`movie_id`) AS movieId, AVG(`rating`) AS rating FROM `movie_rate` WHERE HEX(`movie_id`) IN ?1 GROUP BY `movie_id`", nativeQuery = true)
    List<IMovieIdRating> getMoviesRatingByIds(String[] ids);

    Iterable<MovieRate> findAllByMovieIs(Movie movie);
}
