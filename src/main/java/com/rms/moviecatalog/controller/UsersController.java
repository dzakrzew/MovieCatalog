package com.rms.moviecatalog.controller;

import com.rms.moviecatalog.dao.UserDao;
import com.rms.moviecatalog.entity.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {


    private UserDao userDao = new UserDao();

    @GetMapping("/list")
    public String list() {
        List<User> users = userDao.getUsers();
        return users.toString();
    }

    @GetMapping("/get/{id}")
    public String get(@PathVariable String id) {
        try {
            return userDao.getUser(Long.parseLong(id)).toString();
        }
        catch (Exception e) {
            return "User not found";
        }
    }

    @RequestMapping(value = "/create", method = { RequestMethod.GET, RequestMethod.POST })
    public String create(@RequestParam(name = "email") String email) {
        User user = new User();
        user.setEmail(email);
        userDao.saveUser(user);

        return "User created!";
    }
}
