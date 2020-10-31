package com.rms.moviecatalog;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
    private static SessionFactory factory;

    public static SessionFactory getSessionFactory() {
        if (factory == null) {
            factory = new Configuration().configure("/resources/hibernate.cfg.xml").buildSessionFactory();
        }

        return factory;
    }
}
