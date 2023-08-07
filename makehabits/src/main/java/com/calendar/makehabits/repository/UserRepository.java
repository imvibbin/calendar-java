package com.calendar.makehabits.repository;

import com.calendar.makehabits.models.User;
import com.calendar.makehabits.models.UserRowMapper;

import jakarta.servlet.http.HttpSessionEvent;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

  private JdbcTemplate jdbcTemplate;

  public UserRepository(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  public User findById(long id) {
    String GET_USER_BY_ID = "SELECT * FROM users WHERE id = ?";
    List<User> users = jdbcTemplate.query(GET_USER_BY_ID, new UserRowMapper(), new Object[] { id });
    return users.get(0);
  }

  public List<User> authLogin(String username, String password) {
    String GET_USER_BY_LOGIN_REQUEST = "SELECT * FROM makehabits_test.users WHERE username = ? and password = ?";
    Object[] params = { username, password };
    List<User> users = jdbcTemplate.query(GET_USER_BY_LOGIN_REQUEST, new UserRowMapper(), params);
    return users;
  }

  // public ResponseEntity<User> createUser(User userToRegister) {
  // String CHECK_IF_USER_EXISTS = "SELECT * FROM users WHERE username = ?";
  // String REGISTER_NEW_USER = "INSERT INTO users (username, password, rol_id)
  // VALUES (?, ?, 2)";
  // List<User> users = jdbcTemplate.query(CHECK_IF_USER_EXISTS, new
  // UserRowMapper(),
  // new Object[] { userToRegister.getUsername() });
  // if (users.size() == 0) {
  // return new ResponseEntity<>(HttpStatus.CONFLICT);
  // }
  // Object[] params = { userToRegister.getUsername(),
  // userToRegister.getPassword() };
  // int arrowsAffected = jdbcTemplate.update(REGISTER_NEW_USER, params);
  // if (arrowsAffected) {
  //
  // }
  // }
}
