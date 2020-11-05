package com.rms.moviecatalog.apicontroller;

import com.rms.moviecatalog.dto.MovieDto;
import com.rms.moviecatalog.model.Movie;
import com.rms.moviecatalog.repository.MovieRepository;
import com.rms.moviecatalog.requestobject.RateMovieRequestObject;
import com.rms.moviecatalog.service.MoviesService;
import com.rms.moviecatalog.util.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/movies", produces = MediaType.APPLICATION_JSON_VALUE)
public class MoviesController {
    private final MovieRepository movieRepository;
    private final MoviesService moviesService;

    @Autowired
    public MoviesController(MovieRepository movieRepository, MoviesService moviesService) {
        this.movieRepository = movieRepository;
        this.moviesService = moviesService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Movie>> list() {
        Iterable<Movie> movies = movieRepository.findAll();
        List<Movie> moviesList = new ArrayList<>();
        movies.forEach(moviesList::add);

        return ResponseEntity.ok(moviesList);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<MovieDto> get(@PathVariable Long id) {
        try {
            MovieDto movieDto = moviesService.getMovieWithRating(id);

            return ResponseEntity.ok(movieDto);
        }
        catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(value = "/create", method = { RequestMethod.GET, RequestMethod.POST })
    public ResponseEntity<ApiResponse> create(@RequestParam(name = "title") String title,
                         @RequestParam(name = "plot") String plot,
                         @RequestParam(name = "posterImageUrl") String posterImageUrl,
                         @RequestParam(name = "imdbId") String imdbId) {
        Movie movie = new Movie();
        movie.setTitle(title);
        movie.setPlot(plot);
        movie.setImdbId(imdbId);
        movie.setPosterImageUrl(posterImageUrl);

        try {
            movieRepository.save(movie);
            return ResponseEntity.ok(new ApiResponse("Movie created successfully"));
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body(new ApiResponse(e.getMessage()));
        }
    }

    @RequestMapping(value = "/rate", method = { RequestMethod.GET, RequestMethod.POST })
    public ResponseEntity<Movie> rateMovie(@RequestParam(name = "movieId") Long movieId, @RequestParam(name = "rating") int rating) {

        RateMovieRequestObject requestObject = new RateMovieRequestObject(movieId, rating);

        try {
            moviesService.rateMovie(requestObject);
            Optional<Movie> movie = movieRepository.findById(movieId);

            return movie.map(ResponseEntity::ok).orElse(null);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
