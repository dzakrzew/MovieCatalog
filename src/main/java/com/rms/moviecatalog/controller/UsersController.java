package com.rms.moviecatalog.controller;

import com.rms.moviecatalog.repository.UserRepository;
import com.rms.moviecatalog.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {
    private UserRepository userRepository = new UserRepository();

    @GetMapping("/list")
    public ResponseEntity<List<User>> list() {
        List<User> users = userRepository.getUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<User> get(@PathVariable String id) {
        try {
            User user = userRepository.getUser(Long.parseLong(id));

            return ResponseEntity.ok(user);
        }
        catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(value = "/create", method = { RequestMethod.GET, RequestMethod.POST })
    public String create(@RequestParam(name = "email") String email) {
        User user = new User();
        user.setEmail(email);
        userRepository.saveUser(user);

        return "User created!";
    }
}
