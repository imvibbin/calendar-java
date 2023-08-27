package com.calendar.makehabits.repository;

import com.calendar.makehabits.models.Activity;
import com.calendar.makehabits.models.ActivityRowMapper;
import com.calendar.makehabits.models.User;
import com.calendar.makehabits.models.UserRowMapper;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

  @Autowired private ActivityRepository activityRepository;

  private JdbcTemplate jdbcTemplate;

  public UserRepository(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  public User findUserById(long id) {
    String GET_USER_BY_ID =
        "SELECT * FROM makehabits_test.users INNER JOIN Tasks ON makehabits_test.users.user_id ="
            + " Tasks.user_id WHERE makehabits_test.users.user_id = ?";
    try {
      List<User> users = jdbcTemplate.query(GET_USER_BY_ID, new UserRowMapper(), id);
      List<Activity> activities = jdbcTemplate.query(GET_USER_BY_ID, new ActivityRowMapper(), id);
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

  public User authLogin(String username, String password) {
    String GET_USER_BY_LOGIN_REQUEST =
        "SELECT * FROM makehabits_test.users WHERE makehabits_test.users.username = ? AND"
            + " makehabits_test.users.password = ?";
    Object[] params = {username, password};
    try {
      List<User> users = jdbcTemplate.query(GET_USER_BY_LOGIN_REQUEST, new UserRowMapper(), params);
      if (!users.isEmpty()) {
        User user = users.get(0);
        List<Activity> activities = activityRepository.findAllActivitiesByUserId(user.getUser_id());
        user.setActivities(activities);
        return user;
      } else {
        return null; // Return null if no user is found
      }
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
      int usersByUsernameCount =
          jdbcTemplate.queryForObject(
              CHECK_IF_USER_EXISTS, Integer.class, userToRegister.getUsername());
      int usersByEmailCount =
          jdbcTemplate.queryForObject(
              CHECK_IF_EMAIL_EXISTS, Integer.class, userToRegister.getEmail());

      if (usersByUsernameCount > 0) {
        return 2; // User already exists
      } else if (usersByEmailCount > 0) {
        return 3; // Email already exists
      }

      int rowsAffected =
          jdbcTemplate.update(
              REGISTER_NEW_USER,
              userToRegister.getUsername(),
              userToRegister.getEmail(),
              userToRegister.getPassword());

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
