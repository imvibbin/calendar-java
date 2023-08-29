package com.calendar.makehabits.controllers;

import com.calendar.makehabits.models.Activity;
import com.calendar.makehabits.models.Appointment;
import com.calendar.makehabits.models.Habit;
import com.calendar.makehabits.services.ActivityService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ActivityController {

  @Autowired private ActivityService activityService;

  @PostMapping("/activity")
  public Boolean createActivity(@RequestBody Map<String, Object> activityMap) {
    Activity activity;
    String taskType = (String) activityMap.get("task_type");
    if ("habit".equals(taskType)) {
      activity = new Habit();
      ((Habit) activity)
          .setTask_habit_repetitions((String) activityMap.get("task_habit_repetitions"));
    } else if ("appointment".equals(taskType)) {
      activity = new Appointment();
      ((Appointment) activity).setTask_date_range((String) activityMap.get("task_date_range"));
    } else {
      return false;
    }
    activity.setUser_id((Integer) activityMap.get("user_id"));
    activity.setTask_name((String) activityMap.get("task_name"));
    activity.setTask_hour_range((String) activityMap.get("task_hour_range"));
    activity.setTask_description((String) activityMap.get("task_description"));
    activity.setTask_type(taskType);
    return activityService.createActivity(activity);
  }

  @GetMapping("/activity/{userId}")
  public ResponseEntity<?> getActivitiesByUserId(@PathVariable Long userId) {
    System.out.println(userId);
    List<Activity> activities = activityService.getActivityById(userId);

    final HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.setContentType(MediaType.APPLICATION_JSON);

    return new ResponseEntity<>(activities, HttpStatus.OK);
  }

  @DeleteMapping("/activity/{id}")
  public void deleteActivity(@PathVariable Long id) {
    activityService.deleteActivity(id);
  }
}
