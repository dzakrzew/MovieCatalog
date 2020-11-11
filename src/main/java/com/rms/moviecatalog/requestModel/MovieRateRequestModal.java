package com.rms.moviecatalog.requestModel;

import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.*;

public class MovieRateRequestModal {
    @Range(min = 1, max = 5, message = "Ocena musi być z zakresu od 1 do 5")
    private int rating;

    @Size(max = 300, message = "Wiadomość może zawierać maksymalnie 200 znaków")
    private String comment;

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
