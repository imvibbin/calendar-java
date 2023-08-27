package com.calendar.makehabits.repository;

import com.calendar.makehabits.models.User;
import com.calendar.makehabits.models.UserRowMapper;
import java.util.List;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

  private JdbcTemplate jdbcTemplate;

  public UserRepository(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;}
  public User findById(long id) {
    String GET_USER_BY_ID = "SELECT * FROM users WHERE id = ?";
    try {
      List<User> users = jdbcTemplate.query(GET_USER_BY_ID, new UserRowMapper(), id);
      if (!users.isEmpty()) {
        return users.get(0);
      } else {
        return null; // Return null if user is not found
      }
    } catch (DataAccessException e) {
      // Handle database access exception here
      e.printStackTrace();
      return null;
    }
  }

  public List<User> authLogin(String username, String password) {
    String GET_USER_BY_LOGIN_REQUEST = "SELECT * FROM makehabits_test.users WHERE username = ? and password = ?";
    Object[] params = { username, password };
    try {
      List<User> users = jdbcTemplate.query(GET_USER_BY_LOGIN_REQUEST, new UserRowMapper(), params);
      return users;
    } catch (DataAccessException e) {
      // Handle database access exception here
      e.printStackTrace();
      return null;
    }
  }

  public short createUser(User userToRegister) {
    String CHECK_IF_USER_EXISTS = "SELECT COUNT(*) FROM users WHERE username = ?";
    String CHECK_IF_EMAIL_EXISTS = "SELECT COUNT(*) FROM users WHERE email = ?";
    String REGISTER_NEW_USER = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

    try {
      int usersByUsernameCount = jdbcTemplate.queryForObject(CHECK_IF_USER_EXISTS, Integer.class,
          userToRegister.getUsername());
      int usersByEmailCount = jdbcTemplate.queryForObject(CHECK_IF_EMAIL_EXISTS, Integer.class,
          userToRegister.getEmail());

      if (usersByUsernameCount > 0) {
        return 2; // User already exists
      } else if (usersByEmailCount > 0) {
        return 3; // Email already exists
      }

      int rowsAffected = jdbcTemplate.update(REGISTER_NEW_USER,
          userToRegister.getUsername(), userToRegister.getEmail(), userToRegister.getPassword());

      if (rowsAffected == 0) {
        return 1; // Error in user registration
      } else {
        return 0; // Successful registration
      }
    } catch (DataAccessException e) {
      e.printStackTrace();
      return -1; // Return a negative value to indicate a general error
    }
  }
}
