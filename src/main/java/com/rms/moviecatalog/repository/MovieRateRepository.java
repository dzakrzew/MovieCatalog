package com.rms.moviecatalog.repository;

import com.rms.moviecatalog.HibernateUtil;
import com.rms.moviecatalog.model.Movie;
import com.rms.moviecatalog.model.MovieRate;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

public class MovieRateRepository {
    public MovieRate saveMovieRate(MovieRate movieRate) {
        Transaction transaction = null;

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.save(movieRate);
            transaction.commit();

            return movieRate;
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }

            e.printStackTrace();

            return null;
        }
    }

    public double getMovieRating(Movie movie) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {

            // todo: clean up this bullshit
            Long sum = (Long)session.createQuery("SELECT sum(rating) FROM MovieRate WHERE movie = :movie")
                    .setParameter("movie", movie)
                    .getSingleResult();
            Long count = (Long)session.createQuery("SELECT count(rating) FROM MovieRate WHERE movie = :movie")
                    .setParameter("movie", movie)
                    .getSingleResult();

            if (count == 0) {
                return 0.0;
            }

            return (double)sum/(double)count;
        }
    }
}
