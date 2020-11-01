package com.rms.moviecatalog.controller;

import com.rms.moviecatalog.entity.Movie;
import com.rms.moviecatalog.repository.MovieRepository;
import com.rms.moviecatalog.repository.MovieRepository;
import com.rms.moviecatalog.entity.Movie;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MoviesController {
    private MovieRepository movieRepository = new MovieRepository();

    @GetMapping("/list")
    public ResponseEntity<List<Movie>> list() {
        List<Movie> movies = movieRepository.getMovies();

        return ResponseEntity.ok(movies);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Movie> get(@PathVariable String id) {
        try {
            Movie movie = movieRepository.getMovie(Long.parseLong(id));

            return ResponseEntity.ok(movie);
        }
        catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(value = "/create", method = { RequestMethod.GET, RequestMethod.POST })
    public String create(@RequestParam(name = "title") String title,
                         @RequestParam(name = "description") String description,
                         @RequestParam(name = "imageUrl") String imageUrl) {
        Movie movie = new Movie();
        movie.setTitle(title);
        movie.setDescription(description);
        movie.setImageUrl(imageUrl);

        try {
            movieRepository.saveMovie(movie);
            return "Movie created!";
        }
        catch (Exception e) {
            return "Cannot create movie";
        }
    }
}
