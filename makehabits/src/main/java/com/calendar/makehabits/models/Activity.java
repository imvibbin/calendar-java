
package com.calendar.makehabits.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Activity {
  private Long task_id;
  private String name;
  private User user_id;
  private String task_name;
  private String task_description;
  private Enum task_type;
}
