package com.calendar.makehabits.enums;

public enum MessageType {
  OK("OK", 200, "Oc."),
  USER_NOT_FOUND("USER_NOT_FOUND", 404, "User not found"),
  INVALID_USER_OR_PASSWORD("INVALID_USER_OR_PASSWORD", 401, "Invalid user or password"),
  USERNAME_ALREADY_EXISTS("USERNAME_ALREADY_EXISTS", 409, "Username already exists");

  private final String key;
  private final int status;
  private final String message;

  MessageType(String key, int status, String message) {
    this.key = key;
    this.status = status;
    this.message = message;
  }

  public String getKey() {
    return key;
  }

  public int getStatus() {
    return status;
  }

  public String getMessage() {
    return message;
  }
}
