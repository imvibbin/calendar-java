package com.calendar.makehabits.repository;

import com.calendar.makehabits.models.Activity;
import com.calendar.makehabits.models.ActivityRowMapper;
import java.util.List;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ActivityRepository {

  private JdbcTemplate jdbcTemplate;

  public ActivityRepository(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  public List<Activity> findAllActivitiesByUserId(long userId) {
    String GET_ACTIVITIES_BY_USER_ID = "SELECT * FROM tasks WHERE user_id = ? ";
    try {
      List<Activity> activities =
          jdbcTemplate.query(GET_ACTIVITIES_BY_USER_ID, new ActivityRowMapper(), userId);
      System.out.println(activities);
      return activities;
    } catch (DataAccessException e) {
      e.printStackTrace();
      return null;
    }
  }

  public boolean createActivity(Activity newActivity) {
    String CREATE_NEW_ACTIVITY =
        "INSERT INTO Tasks (user_id,task_name,task_hourrange, task_description, task_type,"
            + " task_habitrepeated) VALUES (?,?,?,?,?,?)";
    try {
      int rowsAffected =
          jdbcTemplate.update(
              CREATE_NEW_ACTIVITY,
              newActivity.getUser_id(),
              newActivity.getTask_name(),
              newActivity.getTask_hourrange(),
              newActivity.getTask_description(),
              newActivity.getTask_type(),
              newActivity.getTask_habitrepeated());

      return rowsAffected > 0;
    } catch (DataAccessException e) {
      e.printStackTrace();
      return false;
    }
  }

  public Activity save(Activity activity) {
    return null;
  }

  public boolean deleteById(Long task_id) {
    String DELETE_ACTIVITY_BY_ID = "DELETE FROM tasks WHERE task_id = ?";
    try {
      int rowsAffected = jdbcTemplate.update(DELETE_ACTIVITY_BY_ID, task_id);

      return rowsAffected > 0;
    } catch (DataAccessException e) {
      e.printStackTrace();
      return false;
    }
  }
}
