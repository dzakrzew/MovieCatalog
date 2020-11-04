package com.rms.moviecatalog.apicontroller;

import com.rms.moviecatalog.repository.UserRepository;
import com.rms.moviecatalog.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UsersController {
    private UserRepository userRepository = new UserRepository();

    @GetMapping("/list")
    public ResponseEntity<List<User>> list() {
        List<User> users = userRepository.getUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<User> get(@PathVariable String id) {
        User user = userRepository.getUser(Long.parseLong(id));

        if (user != null) {
            return ResponseEntity.ok(user);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @RequestMapping(value = "/create", method = { RequestMethod.GET, RequestMethod.POST })
    public ResponseEntity<User> create(@RequestParam(name = "email") String email) {
        User user = new User();
        user.setEmail(email);

        user = userRepository.saveUser(user);

        if (user != null) {
            return ResponseEntity.ok(user);
        }
        else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
