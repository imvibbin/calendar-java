package com.calendar.makehabits.controllers;

import com.calendar.makehabits.enums.MessageType;
import com.calendar.makehabits.models.Activity;
import com.calendar.makehabits.models.Appointment;
import com.calendar.makehabits.models.Habit;
import com.calendar.makehabits.models.Messages;
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
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/activity")
public class ActivityController {

  @Autowired private ActivityService activityService;

  @PostMapping
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

  @GetMapping("/{userId}")
  public ResponseEntity<?> getActivitiesByUserId(@PathVariable Long userId) {
    System.out.println(userId);
    List<Activity> activities = activityService.getActivityById(userId);

    final HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.setContentType(MediaType.APPLICATION_JSON);

    return new ResponseEntity<>(activities, HttpStatus.OK);
  }

  @PatchMapping
  public ResponseEntity<?> updateActivity(@RequestBody Map<String, Object> activityMap) {
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
      return new ResponseEntity<>(
          Messages.getMessage(MessageType.DATABASE_ERROR), HttpStatus.GATEWAY_TIMEOUT);
    }
    activity.setTask_id((Integer) activityMap.get("task_id"));
    activity.setUser_id((Integer) activityMap.get("user_id"));
    activity.setTask_name((String) activityMap.get("task_name"));
    activity.setTask_hour_range((String) activityMap.get("task_hour_range"));
    activity.setTask_description((String) activityMap.get("task_description"));
    activity.setTask_type(taskType);
    boolean success = activityService.updateActivity(activity);
    if (success) {
      return new ResponseEntity<>(Messages.getMessage(MessageType.OK), HttpStatus.OK);
    }
    return new ResponseEntity<>(
        Messages.getMessage(MessageType.DATABASE_ERROR), HttpStatus.GATEWAY_TIMEOUT);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteActivity(@PathVariable Long id) {
    boolean deleted = activityService.deleteActivity(id);
    if (deleted) {
      return new ResponseEntity<>(Messages.getMessage(MessageType.OK), HttpStatus.OK);
    }
    return new ResponseEntity<>(
        Messages.getMessage(MessageType.DATABASE_ERROR), HttpStatus.NOT_MODIFIED);
  }
}
