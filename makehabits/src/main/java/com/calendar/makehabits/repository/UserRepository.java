package com.calendar.makehabits.repository;

import com.calendar.makehabits.models.User;
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
        new Object[] {id},
        (rs, rowNum) -> {
          User user = new User();
          user.setId(rs.getLong("user_id"));
          user.setUsername(rs.getString("username"));
          user.setPassword(rs.getString("password"));
          return user;
        });
  }
}
