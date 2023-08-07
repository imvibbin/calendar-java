package com.calendar.makehabits.repository;

import com.calendar.makehabits.models.User;
import com.calendar.makehabits.models.UserRowMapper;
import java.util.List;
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
    return jdbcTemplate.queryForObject(
        GET_USER_BY_ID,
        new Object[] { id },
        (rs, rowNum) -> {
          User user = new User();
          user.setId(rs.getLong("user_id"));
          user.setUsername(rs.getString("username"));
          user.setPassword(rs.getString("password"));
          return user;
        });
  }

  public List<User> authLogin(String username, String password) {
    String GET_USER_BY_LOGIN_REQUEST = "SELECT * FROM makehabits_test.users WHERE username = ? and password = ?";
    Object[] params = { username, password };
    List<User> users = jdbcTemplate.query(GET_USER_BY_LOGIN_REQUEST, new UserRowMapper(), params);
    return users;
  }
}
