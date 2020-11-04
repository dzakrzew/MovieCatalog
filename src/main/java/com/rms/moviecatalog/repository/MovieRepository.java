package com.rms.moviecatalog.repository;

import com.rms.moviecatalog.HibernateUtil;
import com.rms.moviecatalog.model.Movie;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class MovieRepository {
    public void saveMovie(Movie movie) {
        Transaction transaction = null;

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();

            session.save(movie);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }

            e.printStackTrace();
        }
    }

    public List<Movie> getMovies() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("from Movie", Movie.class).list();
        }
    }

    public Movie getMovie(Long id) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return (Movie)session.get(Movie.class, id);
        }
    }
}
