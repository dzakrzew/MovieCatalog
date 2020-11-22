package com.rms.moviecatalog.repository;

import com.rms.moviecatalog.model.Movie;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MovieRepository extends PagingAndSortingRepository<Movie, UUID> {
}
