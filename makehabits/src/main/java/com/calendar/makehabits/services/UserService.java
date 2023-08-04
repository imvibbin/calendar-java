package com.calendar.makehabits.services;

import com.calendar.makehabits.models.User;
import com.calendar.makehabits.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired private UserRepository userRepository;

  public User getUserById(long id) {
    return userRepository.findById(id);
  }
}
