package com.rms.moviecatalog.service;

import com.rms.moviecatalog.dto.MovieDto;
import com.rms.moviecatalog.model.Movie;
import com.rms.moviecatalog.model.MovieRate;
import com.rms.moviecatalog.repository.MovieRateRepository;
import com.rms.moviecatalog.repository.MovieRepository;
import com.rms.moviecatalog.requestobject.RateMovieRequestObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MoviesService {
    private final MovieRepository movieRepository;
    private final MovieRateRepository movieRateRepository;

    @Autowired
    public MoviesService(MovieRepository movieRepository, MovieRateRepository movieRateRepository) {
        this.movieRepository = movieRepository;
        this.movieRateRepository = movieRateRepository;
    }

    public MovieRate rateMovie(RateMovieRequestObject requestObject) throws Exception {
        if (!requestObject.isValid()) {
            throw new Exception(String.join(", ", requestObject.getErrors()));
        }

        Optional<Movie> movie = movieRepository.findById(requestObject.getMovieId());

        if (!movie.isPresent()) {
            throw new Exception("Movie not found");
        }

        MovieRate movieRate = new MovieRate();
        movieRate.setMovie(movie.get());
        movieRate.setRating(requestObject.getRating());

        return movieRateRepository.save(movieRate);
    }

    public MovieDto getMovieWithRating(Long movieId) throws Exception {

        Optional<Movie> movie = movieRepository.findById(movieId);

        if (!movie.isPresent()) {
            throw new Exception("Movie not found");
        }

        MovieDto movieDto = new MovieDto(movie.get());

        // TODO: naprawic
        // movieDto.setRating(movieRateRepository.getMovieRating(movie.get()));

        return movieDto;
    }
}
