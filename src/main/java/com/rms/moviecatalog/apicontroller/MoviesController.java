package com.rms.moviecatalog.apicontroller;

import com.rms.moviecatalog.dto.MovieDto;
import com.rms.moviecatalog.model.Movie;
import com.rms.moviecatalog.model.MovieRate;
import com.rms.moviecatalog.repository.MovieRepository;
import com.rms.moviecatalog.requestobject.RateMovieRequestObject;
import com.rms.moviecatalog.service.MoviesService;
import com.rms.moviecatalog.util.ApiResponse;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/movies", produces = MediaType.APPLICATION_JSON_VALUE)
public class MoviesController {
    private MovieRepository movieRepository = new MovieRepository();
    private MoviesService moviesService = new MoviesService();

    @GetMapping("/list")
    public ResponseEntity<List<Movie>> list() {
        List<Movie> movies = movieRepository.getMovies();

        return ResponseEntity.ok(movies);
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
            movieRepository.saveMovie(movie);
            return ResponseEntity.ok(new ApiResponse("Movie created successfully"));
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body(new ApiResponse(e.getMessage()));
        }
    }

    @RequestMapping(value = "/rate", method = { RequestMethod.GET, RequestMethod.POST })
    public ApiResponse rateMovie(@RequestParam(name = "movieId") Long movieId, @RequestParam(name = "rating") int rating) {

        RateMovieRequestObject requestObject = new RateMovieRequestObject(movieId, rating);

        try {
            MovieRate movieRate = moviesService.rateMovie(requestObject);

            return new ApiResponse("Movie rated successfully");
        }
        catch (Exception e) {
            return new ApiResponse(e.getMessage());
        }
    }
}
