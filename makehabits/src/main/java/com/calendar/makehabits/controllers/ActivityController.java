package com.calendar.makehabits.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.calendar.makehabits.enums.MessageType;
import com.calendar.makehabits.models.Activity;
import com.calendar.makehabits.models.Messages;
import com.calendar.makehabits.services.ActivityService;

@RestController
public class ActivityController {

   @Autowired
   private ActivityService activityService;
  
  /*  @CrossOrigin(origins = "http://localhost:5173")
   @PostMapping("/activity")
   public Activity createActivity(@RequestBody Activity activity) {
   return activityService.save(activity);
   } */
  
   @PutMapping("/activity")
   public Boolean updateActivity(@RequestBody Activity activity) {
   System.out.println(activity);
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
