package com.rms.moviecatalog.repository;

import com.rms.moviecatalog.model.Movie;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
@Transactional
public interface MovieRepository extends PagingAndSortingRepository<Movie, UUID> {

    @Query(
            value = "SELECT *, (SELECT IFNULL(AVG(rating),0) FROM movie_rate WHERE movie_rate.movie_id = movie.id) AS rate FROM movie ORDER BY rate DESC LIMIT ?1,?2",
            nativeQuery = true
    )
    List<Movie> getFanFavoritesMovies(int start, int itemsOnPage);

    @Query(
            value = "SELECT *, ((SELECT IFNULL(AVG(rating),0) FROM movie_rate WHERE movie_rate.movie_id = movie.id)+imdb_rating)/2 AS overall FROM movie ORDER BY overall DESC LIMIT ?1,?2",
            nativeQuery = true
    )
    List<Movie> getTopPicksMovies(int start, int itemsOnPage);

    @Modifying
    @Query(
            value = "UPDATE movie SET last_viewed = NOW() WHERE id = ?1",
            nativeQuery = true
    )
    void updateLastViewed(UUID uuid);
}
