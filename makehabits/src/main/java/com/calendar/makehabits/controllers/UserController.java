package com.calendar.makehabits.controllers;

import com.calendar.makehabits.models.ErrorMessages;
import com.calendar.makehabits.models.User;
import com.calendar.makehabits.services.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping("/{id}")
  public ResponseEntity<?> getUserById(@PathVariable long id) {
    User user = userService.getUserById(id);

    final HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.setContentType(MediaType.APPLICATION_JSON);

    if (user == null) {
      return new ResponseEntity<>(ErrorMessages.getMessage("User not found"), HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<>(user, HttpStatus.OK);
  }

  @GetMapping("/login-auth")
  public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
    List<User> users = userService.userLogin(loginRequest.getUsername(), loginRequest.getPassword());

    final HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.setContentType(MediaType.APPLICATION_JSON);

    if (users.isEmpty()) {
      return new ResponseEntity<>(ErrorMessages.getMessage("USERNAME_ALREADY_EXISTS"), HttpStatus.UNAUTHORIZED);
    }

    return new ResponseEntity<>(users.get(0), HttpStatus.OK);
  }

  @PostMapping("/registration")
  public ResponseEntity<?> createNewUser(@RequestBody User userToRegister) {
    int status = userService.registerUser(userToRegister);

    final HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.setContentType(MediaType.APPLICATION_JSON);

    if (status == 0) {
      return new ResponseEntity<>(HttpStatus.OK);
    } else if (status == 1) {
      return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    } else if (status == 2) {
      return new ResponseEntity<>(
          ErrorMessages.getMessage("USERNAME_ALREADY_EXISTS"), HttpStatus.CONFLICT);
    }
    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
