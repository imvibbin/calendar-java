package com.calendar.makehabits.controllers;

import com.calendar.makehabits.enums.MessageType;
import com.calendar.makehabits.models.Messages;
import com.calendar.makehabits.models.User;
import com.calendar.makehabits.models.UserActivity;
import com.calendar.makehabits.services.UserService;
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
      return new ResponseEntity<>(
          Messages.getMessage(MessageType.USER_NOT_FOUND), HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<>(user, HttpStatus.OK);
  }

  @PostMapping("/login-auth")
  public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
    User user = userService.userLogin(loginRequest.getUsername(), loginRequest.getPassword());

    HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.setContentType(MediaType.APPLICATION_JSON);

    if (user == null) {
      return new ResponseEntity<>(
          Messages.getMessage(MessageType.INVALID_USER_OR_PASSWORD), HttpStatus.UNAUTHORIZED);
    }

    return new ResponseEntity<>(user, httpHeaders, HttpStatus.OK);
  }

  @PostMapping("/registration")
  public ResponseEntity<?> createNewUser(@RequestBody User userToRegister) {
    int status = userService.registerUser(userToRegister);

    System.out.println("Username: " + userToRegister.getUsername());
    System.out.println("Email: " + userToRegister.getEmail());
    System.out.println("Code status: " + status);

    HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.setContentType(MediaType.APPLICATION_JSON);

    HttpStatus responseStatus;
    Object responseBody;

    switch (status) {
      case 0:
        responseStatus = HttpStatus.OK;
        responseBody = Messages.getMessage(MessageType.OK);
        break;
      case 1:
        responseStatus = HttpStatus.CONFLICT;
        responseBody = Messages.getMessage(MessageType.USERNAME_ALREADY_EXISTS);
        break;
      case 2:
        responseStatus = HttpStatus.CONFLICT;
        responseBody = Messages.getMessage(MessageType.USERNAME_ALREADY_EXISTS);
        break;
      case 3:
        responseStatus = HttpStatus.CONFLICT;
        responseBody = Messages.getMessage(MessageType.EMAIL_ALREADY_EXISTS);
        break;
      default:
        responseStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        responseBody = null;
        break;
    }

    return new ResponseEntity<>(responseBody, httpHeaders, responseStatus);
  }
}
