package com.calendar.makehabits.models;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

public class ActivityRowMapper implements RowMapper<Activity> {

  @Override
  public Activity mapRow(ResultSet resultSet, int rowNum) throws SQLException {
    String task_type = resultSet.getString("task_type");
    if (task_type.equals("habit")) {
      Habit habit = new Habit();
      habit.setTask_id(resultSet.getLong("task_id"));
      habit.setUser_id(resultSet.getInt("user_id"));
      habit.setTask_name(resultSet.getString("task_name"));
      habit.setTask_description(resultSet.getString("task_description"));
      habit.setTask_type(task_type);
      habit.setTask_hour_range(resultSet.getString("task_hour_range"));
      habit.setTask_habit_repetitions(resultSet.getString("task_habit_repetitions"));
      return habit;
    } else if (task_type.equals("appointment")) {
      Appointment appointment = new Appointment();
      appointment.setTask_id(resultSet.getLong("task_id"));
      appointment.setUser_id(resultSet.getInt("user_id"));
      appointment.setTask_name(resultSet.getString("task_name"));
      appointment.setTask_description(resultSet.getString("task_description"));
      appointment.setTask_type(task_type);
      appointment.setTask_hour_range(resultSet.getString("task_hour_range"));
      appointment.setTask_date_range(resultSet.getString("task_date_range"));
      return appointment;
    } else {
      return new Activity();
    }
  }
}
