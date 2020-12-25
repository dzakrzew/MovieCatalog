package com.rms.moviecatalog.dto;

import java.time.LocalDateTime;

public class MovieRateDto {
    private int rating;
    private String comment;
    private LocalDateTime createdAt;

    public MovieRateDto(int rating, String comment, LocalDateTime createdAt) {
        this.rating = rating;
        this.comment = comment;
        this.createdAt = createdAt;
    }

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

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
