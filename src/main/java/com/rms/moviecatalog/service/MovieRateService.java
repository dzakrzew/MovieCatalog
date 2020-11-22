package com.rms.moviecatalog.service;

import com.rms.moviecatalog.dto.IMovieIdRating;
import com.rms.moviecatalog.dto.MovieDto;
import com.rms.moviecatalog.dto.MovieRateDto;
import com.rms.moviecatalog.model.Movie;
import com.rms.moviecatalog.model.MovieRate;
import com.rms.moviecatalog.repository.MovieRateRepository;

import com.rms.moviecatalog.requestModel.MovieRateRequestModal;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class MovieRateService {
    private final MovieRateRepository movieRateRepository;

    @Autowired
    public MovieRateService(MovieRateRepository movieRateRepository) {
        this.movieRateRepository = movieRateRepository;
    }

    private static double roundRating(double value) {
        BigDecimal bd = BigDecimal.valueOf(value);
        bd = bd.setScale(2, RoundingMode.HALF_UP);
        return bd.doubleValue();
    }

    private String convertUUIDToBinary(UUID id) {
        return id.toString().toUpperCase().replaceAll("-", "");
    }

    public double getMovieRate(Movie movie) {
        Double rating = this.movieRateRepository.getMovieRatingById(convertUUIDToBinary(movie.getId()));
        if (rating == null) return 0.0;
        return roundRating(rating);
    }

    public List<MovieRateDto> getMovieComments(Movie movie) {
        Iterable<MovieRate> movieRates = this.movieRateRepository.findAllByMovieIs(movie);
        List<MovieRateDto> movieRateList = new ArrayList<>();
        movieRates.forEach(movieRate -> {
            MovieRateDto movieRateDto = new MovieRateDto(movieRate.getRating(), movieRate.getComment());
            movieRateList.add(movieRateDto);
        });

        return movieRateList;
    }

    public boolean rateById(MovieRateRequestModal movieRateRequestModal, Movie movie) {
        MovieRate rate = new MovieRate();
        BeanUtils.copyProperties(movieRateRequestModal, rate);

        rate.setMovie(movie);

        this.movieRateRepository.save(rate);
        return true;
    }

    private MovieDto buildMovieDtoFromRatings(List<IMovieIdRating> ratings, Movie movie) {
        String movieBinaryId = this.convertUUIDToBinary(movie.getId());
        MovieDto movieDto = new MovieDto(movie, 0);

        for (IMovieIdRating rating : ratings) {
            if (movieBinaryId.equals(rating.getMovieId())) {
                movieDto.setRating(roundRating(rating.getRating()));
                break;
            }
        }

        return movieDto;
    }

    // TODO: Clean this shit
    public List<MovieDto> getMovieListWithRating(List<Movie> movies) {
        List<String> moviesId = new ArrayList<>();
        movies.forEach(movie -> moviesId.add(this.convertUUIDToBinary(movie.getId())));

        List<IMovieIdRating> moviesRatingByIds = this.movieRateRepository.getMoviesRatingByIds(moviesId.toArray(new String[0]));
        List<MovieDto> resultList = new ArrayList<>();

        for (Movie movie : movies) {
            resultList.add(this.buildMovieDtoFromRatings(moviesRatingByIds, movie));
        }

        return resultList;
    }
}
