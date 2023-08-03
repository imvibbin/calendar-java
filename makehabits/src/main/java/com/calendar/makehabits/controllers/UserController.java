package com.calendar.makehabits.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @CrossOrigin(origins = "http://localhost:5173")
  @PostMapping("/user")
  public String createUser(@RequestBody String newUser) {
    System.out.println(newUser);
    return newUser;
  }
}
