package com.rms.moviecatalog.service;

import com.rms.moviecatalog.dto.MovieDto;
import com.rms.moviecatalog.dto.MovieRateDto;
import com.rms.moviecatalog.model.Movie;
import com.rms.moviecatalog.repository.MovieRepository;

import com.rms.moviecatalog.requestModel.MovieCreateRequestModal;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class MoviesService {
    private final MovieRepository movieRepository;
    private final MovieRateService movieRateService;

    @Autowired
    public MoviesService(MovieRepository movieRepository, MovieRateService movieRateService) {
        this.movieRepository = movieRepository;
        this.movieRateService = movieRateService;
    }

    public List<Movie> getMoviesByOrderAndPage(String order, int page, int itemsOnPage) {
        List<Movie> moviesList = new ArrayList<>();

        switch (order) {
            case "editors-picks": {
                Pageable pageToFind = PageRequest.of(page, itemsOnPage, Sort.by("imdbRating").descending());

                Page<Movie> movies = movieRepository.findAll(pageToFind);
                movies.forEach(moviesList::add);
                break;
            }
            case "fan-favorites":
                moviesList.addAll(movieRepository.getFanFavoritesMovies(page, itemsOnPage));
                break;
            case "recently-viewed": {
                Pageable pageToFind = PageRequest.of(page, itemsOnPage, Sort.by("lastViewed").descending());

                Page<Movie> movies = movieRepository.findAll(pageToFind);
                movies.forEach(moviesList::add);
                break;
            }
            case "top-picks":
                moviesList.addAll(movieRepository.getTopPicksMovies(page, itemsOnPage));
                break;
            default: {
                Pageable pageToFind = PageRequest.of(page, itemsOnPage);

                Page<Movie> movies = movieRepository.findAll(pageToFind);
                movies.forEach(moviesList::add);
                break;
            }
        }

        return moviesList;
    }

    public Optional<Movie> getMovieById(UUID id) {
        return this.movieRepository.findById(id);
    }

    public Optional<MovieDto> getMovieWithRatingById(UUID id) {
        Optional<Movie> movie = this.movieRepository.findById(id);

        if (!movie.isPresent()) {
            return Optional.empty();
        }

        Movie foundedMovie = movie.get();
        List<MovieRateDto> movieComments = this.movieRateService.getMovieComments(foundedMovie);
        double movieRate = this.movieRateService.getMovieRate(foundedMovie);

        this.movieRepository.updateLastViewed(id);

        return Optional.of(new MovieDto(foundedMovie, movieComments, movieRate));
    }

    public boolean create(MovieCreateRequestModal movieCreateRequestModal) {
        Movie movie = new Movie();
        BeanUtils.copyProperties(movieCreateRequestModal, movie);

        this.movieRepository.save(movie);
        return true;
    }
}
