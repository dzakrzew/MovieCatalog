package com.rms.moviecatalog.dto;

import com.rms.moviecatalog.model.Movie;

public class MovieDto {
    private Movie movie;
    private double rating;

    public MovieDto(Movie movie) {
        this.movie = movie;
        this.rating = 0.0;
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
}
