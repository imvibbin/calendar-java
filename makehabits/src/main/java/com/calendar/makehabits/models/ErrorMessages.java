package com.calendar.makehabits.models;

import java.util.HashMap;
import java.util.Map;

public class ErrorMessages {

  private static final Map<String, ErrorMessageBuilder> errorMessageMap = new HashMap<>();

  static {
    errorMessageMap.put("USER_NOT_FOUND", new ErrorMessageBuilder("User not found"));
    errorMessageMap.put(
        "INVALID_USER_OR_PASSWORD", new ErrorMessageBuilder("Invalid user or password"));
    errorMessageMap.put(
        "USERNAME_ALREADY_EXISTS", new ErrorMessageBuilder("Username already exists"));
  }

  public static ErrorMessageBuilder getMessage(String errorCode) {
    return errorMessageMap.get(errorCode);
  }
}
