package com.rms.moviecatalog.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
public class Movie {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(unique = true, nullable = false, updatable = false, columnDefinition = "BINARY(16)")
    private UUID id;

    @Column(nullable = false)
    private String title;

    @Column(length = 4096)
    private String plot;

    @Column(length = 2048)
    private String posterImageUrl;

    @Column
    private String genre;

    @Column
    private String runtime;

    @Column
    private String language;

    @Column
    private String country;

    @Column(unique = true)
    private String imdbId;

    @Column
    private String year;

    @Column
    private Double imdbRating;

    @Column(nullable = true)
    private Timestamp lastViewed;

    @Override
    public String toString() {
        return String.format("Movie {id = %s, title = %s}", id, title);
    }

    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPlot() {
        return plot;
    }

    public void setPlot(String plot) {
        this.plot = plot;
    }

    public String getPosterImageUrl() {
        return posterImageUrl;
    }

    public void setPosterImageUrl(String posterImageUrl) {
        this.posterImageUrl = posterImageUrl;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getRuntime() {
        return runtime;
    }

    public void setRuntime(String runtime) {
        this.runtime = runtime;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getImdbId() {
        return imdbId;
    }

    public void setImdbId(String imdbId) {
        this.imdbId = imdbId;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public Double getImdbRating() {
        return imdbRating;
    }

    public void setImdbRating(Double imdbRating) {
        this.imdbRating = imdbRating;
    }

    public Timestamp getLastViewed() {
        return lastViewed;
    }

    public void setLastViewed(Timestamp lastViewed) {
        this.lastViewed = lastViewed;
    }
}
