package com.calendar.makehabits.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Activity {
  private long task_id;
  private int user_id;
  private String task_name;
  private String task_hourrange;
  private String task_description;
  private String task_type;
}
