package com.calendar.makehabits.models;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ActivityRowMapper implements RowMapper<Activity> {

   /*  private final UserRowMapper userRowMapper;

    public ActivityRowMapper(UserRowMapper userRowMapper) {
        this.userRowMapper = userRowMapper;
    } */

    @Override
    public Activity mapRow(ResultSet resultSet, int rowNum) throws SQLException {
        // código de mapeo
        Activity activity = new Activity();
        activity.setTask_id(resultSet.getLong("task_id"));
        activity.setUser_id(resultSet.getInt("user_id"));
        activity.setTask_name(resultSet.getString("task_name"));
        activity.setTask_description(resultSet.getString("task_description"));
        activity.setTask_type(resultSet.getString("task_type"));

        return activity;
    }
}
