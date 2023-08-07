package com.calendar.makehabits.controllers;

import com.calendar.makehabits.models.User;
import com.calendar.makehabits.services.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping("/{id}")
  public ResponseEntity<User> getUserById(@PathVariable long id) {
    User user = userService.getUserById(id);
    if (user == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity<>(user, HttpStatus.OK);
  }

  @GetMapping("/login-auth")
  public ResponseEntity<User> loginUser(@RequestBody User loginRequest) {
    System.out.println(loginRequest.getUsername() + loginRequest.getPassword());
    List<User> users = userService.userLogin(loginRequest.getUsername(), loginRequest.getPassword());
    System.out.println(users);
    if (users.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity<>(users.get(0), HttpStatus.OK);
  }
}
