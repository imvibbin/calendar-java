package com.calendar.makehabits.models;

import java.util.HashMap;
import java.util.Map;

public class Messages {
  private static final Map<String, MessageBuilder> MessageMap = new HashMap<>();

  static {
    MessageMap.put("OK", new MessageBuilder(200, "Oc."));
    MessageMap.put("USER_NOT_FOUND", new MessageBuilder(404, "User not found"));
    MessageMap.put("INVALID_USER_OR_PASSWORD", new MessageBuilder(401, "Invalid user or password"));
    MessageMap.put("USERNAME_ALREADY_EXISTS", new MessageBuilder(409, "Username already exists"));
  }

  public static MessageBuilder getMessage(String errorCode) {
    return MessageMap.get(errorCode);
  }
}
