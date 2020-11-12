package com.rms.moviecatalog.model;

import javax.persistence.*;

@Entity
public class MovieRate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(unique = true, nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false, columnDefinition = "BINARY(16)")
    private Movie movie;

    @ManyToOne
    @JoinColumn(columnDefinition = "BINARY(16)")
    private User user;

    @Column
    private int rating;

    @Column(columnDefinition = "varchar(300)", length = 300)
    private String comment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
}
