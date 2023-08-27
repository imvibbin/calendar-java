package com.calendar.makehabits.services;

import com.calendar.makehabits.models.Activity;
import com.calendar.makehabits.repository.ActivityRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivityService {

  @Autowired private ActivityRepository activity;

  public List<Activity> getActivityById(long id) {
    return activity.findAllActivitiesByUserId(id);
  }

  public boolean createActivity(Activity newActivity) {
    return activity.createActivity(newActivity);
  }

  public boolean deleteActivity(long task_id) {
    return activity.deleteById(task_id);
  }
}
