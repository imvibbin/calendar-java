package com.calendar.makehabits.services;

import com.calendar.makehabits.models.User;
import com.calendar.makehabits.repository.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired private UserRepository userRepository;

  public User getUserById(long id) {
    return userRepository.findById(id);
  }

  public List<User> userLogin(String username, String password) {
    return userRepository.authLogin(username, password);
  }

  public ResponseEntity<User> registerUser(User userToRegister) {
    int status = userRepository.createUser(userToRegister);
    if (status == 0) {
      return new ResponseEntity<>(HttpStatus.OK);
    } else if (status == 1) {
      return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    } else if (status == 2) {
      return new ResponseEntity<>(HttpStatus.CONFLICT);
    }
    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
