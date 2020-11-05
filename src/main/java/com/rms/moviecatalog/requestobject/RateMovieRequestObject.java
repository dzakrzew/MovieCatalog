package com.rms.moviecatalog.requestobject;

import java.util.ArrayList;
import java.util.List;

public class RateMovieRequestObject implements RequestObjectInterface {
    private Long movieId;
    private int rating;
    private List<String> errors;

    public RateMovieRequestObject(Long movieId, int rating) {
        this.movieId = movieId;
        this.rating = rating;

        errors = new ArrayList<>();
    }

    public boolean isValid() {
        boolean isValid = true;

        if (rating < 0 || 10 < rating) {
            isValid = false;
            errors.add("Rating must be a value between 0 and 10");
        }

        return isValid;
    }

    public List<String> getErrors() {
        return this.errors;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
