
package com.calendar.makehabits.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Activity {
  private Long id;
  private String name;
  private User user;
}
