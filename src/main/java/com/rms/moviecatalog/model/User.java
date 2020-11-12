package com.rms.moviecatalog.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

import java.util.UUID;

@Entity
public class User {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(unique = true, nullable = false, updatable = false, columnDefinition = "BINARY(16)")
    private UUID id;

    @Column(unique = true, nullable = false)
    private String email;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User { id=" + id + ", email=" + email + "}";
    }
}
