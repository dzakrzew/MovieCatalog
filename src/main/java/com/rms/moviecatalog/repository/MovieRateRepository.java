package com.rms.moviecatalog.repository;

import com.rms.moviecatalog.model.MovieRate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRateRepository extends CrudRepository<MovieRate, Long> {
//    default double getMovieRating(Movie movie) {
//        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
//
//            // todo: clean up this bullshit
//            Long sum = (Long)session.createQuery("SELECT sum(rating) FROM MovieRate WHERE movie = :movie")
//                    .setParameter("movie", movie)
//                    .getSingleResult();
//            Long count = (Long)session.createQuery("SELECT count(rating) FROM MovieRate WHERE movie = :movie")
//                    .setParameter("movie", movie)
//                    .getSingleResult();
//
//            if (count == 0) {
//                return 0.0;
//            }
//
//            return (double)sum/(double)count;
//        }
//    }
}
