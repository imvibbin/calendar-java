package com.calendar.makehabits.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class User {
  private Long id;
  private String username;
  private String password;
  private int rol;
}
