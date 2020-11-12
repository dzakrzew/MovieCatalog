package com.rms.moviecatalog.requestModel;

import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class MovieCreateRequestModal {

    @NotNull(message = "Film musi posiadać tytuł")
    @Size(max = 255, message = "Tytul filmy nie może zawierać więcej niż 255 znaków")
    private String title;

    @Size(max = 4096, message = "Opis filmy nie może zawierać więcej niż 4096 znaków")
    private String plot;

    @URL(regexp = "^(http|https).*")
    @Size(max = 2048, message = "Pole nie może zawierać więcej niż 2048 znaków")
    private String posterImageUrl;

    @Size(max = 255, message = "Pole nie może zawierać więcej niż 255 znaków")
    private String genre;

    @Size(max = 255, message = "Pole nie może zawierać więcej niż 255 znaków")
    private String runtime;

    @Size(max = 255, message = "Pole nie może zawierać więcej niż 255 znaków")
    private String language;

    @Size(max = 255, message = "Pole nie może zawierać więcej niż 255 znaków")
    private String country;

    @Size(max = 255, message = "Pole nie może zawierać więcej niż 255 znaków")
    private String imdbId;

    @Size(max = 255, message = "Pole nie może zawierać więcej niż 255 znaków")
    private String year;

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
}
