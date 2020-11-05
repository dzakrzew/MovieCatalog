package com.rms.moviecatalog.apicontroller;

import com.rms.moviecatalog.repository.UserRepository;
import com.rms.moviecatalog.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UsersController {
    private final UserRepository userRepository;

    @Autowired
    public UsersController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/list")
    public ResponseEntity<List<User>> list() {
        List<User> usersList = new ArrayList<>();
        Iterable<User> users = userRepository.findAll();
        users.forEach(usersList::add);

        return ResponseEntity.ok(usersList);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<User> get(@PathVariable String id) {
        Optional<User> user = userRepository.findById(Long.parseLong(id));

        return user.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @RequestMapping(value = "/create", method = { RequestMethod.GET, RequestMethod.POST })
    public ResponseEntity<User> create(@RequestParam(name = "email") String email) {
        User user = new User();
        user.setEmail(email);
        user = userRepository.save(user);

        return ResponseEntity.ok(user);
    }
}
