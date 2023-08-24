package com.calendar.makehabits.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.calendar.makehabits.models.Activity;
import com.calendar.makehabits.repository.ActivityRepository;

@RestController
public class ActivityController {

  // @Autowired
  // private ActivityRepository activityRepository;
  //
  // @CrossOrigin(origins = "http://localhost:5173")
  // @PostMapping("/activity")
  // public Activity createActivity(@RequestBody Activity activity) {
  // return activityRepository.save(activity);
  // }
  //
  // @PutMapping("/activity")
  // public Activity updateActivity(@RequestBody Activity activity) {
  // return activityRepository.save(activity);
  // }
  //
  // @GetMapping("/activity/{userId}")
  // public List<Activity> getActivitiesByUserId(@PathVariable Long userId) {
  // return null;
  // }
  //
  // @DeleteMapping("/activity/{id}")
  // public void deleteActivity(@PathVariable Long id) {
  // activityRepository.deleteById(id);
  // }
}
