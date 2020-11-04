package com.rms.moviecatalog.service;

import com.rms.moviecatalog.dto.MovieDto;
import com.rms.moviecatalog.model.Movie;
import com.rms.moviecatalog.model.MovieRate;
import com.rms.moviecatalog.repository.MovieRateRepository;
import com.rms.moviecatalog.repository.MovieRepository;
import com.rms.moviecatalog.requestobject.RateMovieRequestObject;
import org.springframework.stereotype.Service;

@Service
public class MoviesService {
    private final MovieRepository movieRepository = new MovieRepository();
    private final MovieRateRepository movieRateRepository = new MovieRateRepository();

    public MovieRate rateMovie(RateMovieRequestObject requestObject) throws Exception {
        if (!requestObject.isValid()) {
            throw new Exception(String.join(", ", requestObject.getErrors()));
        }

        Movie movie = movieRepository.getMovie(requestObject.getMovieId());

        if (movie == null) {
            throw new Exception("Movie not found");
        }

        MovieRate movieRate = new MovieRate();
        movieRate.setMovie(movie);
        movieRate.setRating(requestObject.getRating());

        return movieRateRepository.saveMovieRate(movieRate);
    }

    public MovieDto getMovieWithRating(Long movieId) throws Exception {

        Movie movie = movieRepository.getMovie(movieId);

        if (movie == null) {
            throw new Exception("Movie not found");
        }

        MovieDto movieDto = new MovieDto(movie);

        movieDto.setRating(movieRateRepository.getMovieRating(movie));

        return movieDto;
    }
}
