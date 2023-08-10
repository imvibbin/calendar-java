package com.calendar.makehabits.models;

import java.util.HashMap;
import java.util.Map;

public class ErrorMessages {

  private static final Map<String, MessageBuilder> errorMessageMap = new HashMap<>();

  static {
    errorMessageMap.put("USER_NOT_FOUND", new MessageBuilder(404, "User not found"));
    errorMessageMap.put(
        "INVALID_USER_OR_PASSWORD", new MessageBuilder(401, "Invalid user or password"));
    errorMessageMap.put(
        "USERNAME_ALREADY_EXISTS", new MessageBuilder(409, "Username already exists"));
  }

  public static MessageBuilder getMessage(String errorCode) {
    return errorMessageMap.get(errorCode);
  }
}
