package com.calendar.makehabits.repository;

import com.calendar.makehabits.models.Activity;
import com.calendar.makehabits.models.ActivityRowMapper;
import com.calendar.makehabits.models.Appointment;
import com.calendar.makehabits.models.Habit;
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
      List<Activity> activities = jdbcTemplate.query(GET_ACTIVITIES_BY_USER_ID, new ActivityRowMapper(), userId);
      System.out.println(activities);
      return activities;
    } catch (DataAccessException e) {
      e.printStackTrace();
      return null;
    }
  }

  public boolean updateActivity(Activity newActivity) {
    String UPDATE_ACTIVITY = "UPDATE Tasks SET task_name = ?, task_hour_range = ?, task_date_range = ?, task_description"
        + " = ?, task_type = ?, task_habit_repetitions = ? WHERE task_id = ?";

    try {
      if (newActivity instanceof Habit) {
        Habit habit = (Habit) newActivity;
        int rowsAffected = jdbcTemplate.update(
            UPDATE_ACTIVITY,
            habit.getTask_name(),
            habit.getTask_hour_range(),
            null,
            habit.getTask_description(),
            habit.getTask_type(),
            habit.getTask_habit_repetitions(),
            habit.getTask_id());
        return rowsAffected > 0;
      } else if (newActivity instanceof Appointment) {
        Appointment appointment = (Appointment) newActivity;
        int rowsAffected = jdbcTemplate.update(
            UPDATE_ACTIVITY,
            appointment.getTask_name(),
            appointment.getTask_hour_range(),
            appointment.getTask_date_range(),
            appointment.getTask_description(),
            appointment.getTask_type(),
            null,
            appointment.getTask_id());
        return rowsAffected > 0;
      } else {
        return false;
      }
    } catch (DataAccessException e) {
      e.printStackTrace();
      return false;
    }
  }

  public boolean createActivity(Activity newActivity) {
    String CREATE_NEW_ACTIVITY = "INSERT INTO Tasks (user_id, task_name, task_hour_range, task_date_range, task_description,"
        + " task_type, task_habit_repetitions) VALUES (?, ?, ?, ?, ?, ?, ?)";
    try {
      if (newActivity instanceof Habit) {
        Habit habit = (Habit) newActivity;
        int rowsAffected = jdbcTemplate.update(
            CREATE_NEW_ACTIVITY,
            habit.getUser_id(),
            habit.getTask_name(),
            habit.getTask_hour_range(),
            null,
            habit.getTask_description(),
            habit.getTask_type(),
            habit.getTask_habit_repetitions());
        return rowsAffected > 0;
      } else if (newActivity instanceof Appointment) {
        Appointment appointment = (Appointment) newActivity;
        int rowsAffected = jdbcTemplate.update(
            CREATE_NEW_ACTIVITY,
            appointment.getUser_id(),
            appointment.getTask_name(),
            appointment.getTask_hour_range(),
            appointment.getTask_date_range(),
            appointment.getTask_description(),
            appointment.getTask_type(),
            null);
        return rowsAffected > 0;
      } else {
        return false;
      }
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
