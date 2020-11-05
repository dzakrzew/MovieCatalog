package com.rms.moviecatalog;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
    private static SessionFactory factory;

    public static SessionFactory getSessionFactory() {
        if (factory == null) {
            Configuration cfg = new Configuration();
            cfg = cfg.configure("hibernate.cfg.xml");
            factory = cfg.buildSessionFactory();
        }

        return factory;
    }
}
