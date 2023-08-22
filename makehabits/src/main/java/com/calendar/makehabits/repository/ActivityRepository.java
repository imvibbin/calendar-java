package com.calendar.makehabits.repository;

import com.calendar.makehabits.models.Activity;
import com.calendar.makehabits.models.ActivityRowMapper;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ActivityRepository {

    private JdbcTemplate jdbcTemplate;

    public ActivityRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Activity> findAllActivitiesByUserId(long userId) {
        String GET_ACTIVITIES_BY_USER_ID = "SELECT * FROM activities WHERE user_id = ? ";
        try {
          List<Activity> activities = jdbcTemplate.query(GET_ACTIVITIES_BY_USER_ID, new ActivityRowMapper(null), userId);
        return activities;
        } catch (DataAccessException e) {
            e.printStackTrace();
            return null;
        }
    }

    public boolean createActivity(Activity newActivity) {
         String CREATE_NEW_ACTIVITY = "INSERT INTO activities (user_id, task_name, task_description, task_type) VALUES (?, ?, ?, ?)";
        try {
            int rowsAffected = jdbcTemplate.update(
                CREATE_NEW_ACTIVITY,
                newActivity.getTask_id(),
                newActivity.getTask_name(),
                newActivity.getTask_description(),
                newActivity.getTask_type()
            );

            return rowsAffected > 0;
        } catch (DataAccessException e) {
            e.printStackTrace();
            return false;
        } 
    }
}
