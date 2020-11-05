package com.rms.moviecatalog.repository;

import com.rms.moviecatalog.HibernateUtil;
import com.rms.moviecatalog.model.User;
import org.hibernate.Session;
import java.util.List;

public class UserRepository {
    public User saveUser(User user) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            session.save(user);

            return user;
        } catch (Exception e) {

            e.printStackTrace();

            return null;
        }
    }

    public List<User> getUsers() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.createQuery("from User", User.class).list();
        }
    }

    public User getUser(Long id) {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            return session.get(User.class, id);
        }
        catch (Exception e) {
            return null;
        }
    }
}
