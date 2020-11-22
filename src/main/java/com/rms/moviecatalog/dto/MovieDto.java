package com.rms.moviecatalog.dto;

import com.rms.moviecatalog.model.Movie;

import java.util.List;

public class MovieDto {
    private Movie movie;
    private double rating;
    private List<MovieRateDto> rates;

    public MovieDto(Movie movie, List<MovieRateDto> rates, double rating) {
        this.movie = movie;
        this.rating = rating;
        this.rates = rates;
    }

    public MovieDto(Movie movie, double rating) {
        this.movie = movie;
        this.rating = rating;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public List<MovieRateDto> getRates() {
        return rates;
    }

    public void setRates(List<MovieRateDto> rates) {
        this.rates = rates;
    }
}
