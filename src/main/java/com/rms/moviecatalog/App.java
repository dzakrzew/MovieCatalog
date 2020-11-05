package com.rms.moviecatalog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@PropertySource("application.properties")
@EntityScan("com.rms.moviecatalog")
@EnableJpaRepositories("com.rms.moviecatalog")
public class App {

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}