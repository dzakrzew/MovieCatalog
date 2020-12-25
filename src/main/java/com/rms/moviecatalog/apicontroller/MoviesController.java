package com.rms.moviecatalog.apicontroller;

import com.rms.moviecatalog.dto.MovieDto;
import com.rms.moviecatalog.model.Movie;
import com.rms.moviecatalog.requestModel.MovieCreateRequestModal;
import com.rms.moviecatalog.requestModel.MovieRateRequestModal;
import com.rms.moviecatalog.service.MovieRateService;
import com.rms.moviecatalog.service.MoviesService;
import com.rms.moviecatalog.util.ApiResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/movies", produces = MediaType.APPLICATION_JSON_VALUE, method = {RequestMethod.GET, RequestMethod.POST})
public class MoviesController {
    private final MoviesService moviesService;
    private final MovieRateService movieRateService;

    @Autowired
    public MoviesController(MoviesService moviesService, MovieRateService movieRateService) {
        this.moviesService = moviesService;
        this.movieRateService = movieRateService;
    }

    @GetMapping("/list")
    public ResponseEntity list(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int itemsOnPage, @RequestParam(defaultValue = "false") boolean details) {
        List<Movie> moviesList = this.moviesService.getMoviesByPage(page, itemsOnPage);

        if (details) {
            return ResponseEntity.ok(this.movieRateService.getMovieListWithRating(moviesList));
        }

        return ResponseEntity.ok(moviesList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MovieDto> get(@PathVariable UUID id) {
        Optional<MovieDto> movieDto = moviesService.getMovieWithRatingById(id);
        String s = "asd";
        System.out.println(s);

        return movieDto.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());

    }

    @PostMapping(value = "/create", consumes = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ApiResponse> create(@Valid @RequestBody MovieCreateRequestModal movieRequestModal) {
        this.moviesService.create(movieRequestModal);
        return ResponseEntity.ok(new ApiResponse("Movie created successfully"));
    }

    @PostMapping(value = "/{id}/rate", consumes = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ApiResponse> rateMovie(@Valid @RequestBody MovieRateRequestModal movieRateRequestModal, @PathVariable String id) {
        Optional<Movie> movie = this.moviesService.getMovieById(UUID.fromString(id));

        if (!movie.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("Requested movie not found"));
        }

        this.movieRateService.rateById(movieRateRequestModal, movie.get());
        return ResponseEntity.ok(new ApiResponse("Movie rated successfully"));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public void constraintViolationException(HttpServletResponse response) throws IOException {
        response.sendError(HttpStatus.BAD_REQUEST.value());
    }
}
