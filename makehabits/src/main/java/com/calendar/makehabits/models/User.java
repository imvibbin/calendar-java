package com.calendar.makehabits.models;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
  private Long user_id;
  private String username;
  private String email;
  private String password;
  private List<Activity> activities;
}
