package com.calendar.makehabits.models;

import java.util.HashMap;
import java.util.Map;

public class ErrorMessages {

  private static final Map<String, MessageBuilder> errorMessageMap = new HashMap<>();

  static {
    errorMessageMap.put("USER_NOT_FOUND", new MessageBuilder("User not found"));
    errorMessageMap.put(
        "INVALID_USER_OR_PASSWORD", new MessageBuilder("Invalid user or password"));
    errorMessageMap.put(
        "USERNAME_ALREADY_EXISTS", new MessageBuilder("Username already exists"));
  }

  public static MessageBuilder getMessage(String errorCode) {
    return errorMessageMap.get(errorCode);
  }
}
