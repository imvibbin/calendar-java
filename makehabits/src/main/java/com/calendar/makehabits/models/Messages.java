package com.calendar.makehabits.models;

import com.calendar.makehabits.enums.MessageType;
import java.util.HashMap;
import java.util.Map;

public class Messages {
  private static final Map<String, MessageBuilder> errorMessageMap = new HashMap<>();

  static {
    for (MessageType messageType : MessageType.values()) {
      System.out.println(
          messageType.getKey()
              + new MessageBuilder(messageType.getStatus(), messageType.getMessage()));
      errorMessageMap.put(
          messageType.getKey(),
          new MessageBuilder(messageType.getStatus(), messageType.getMessage()));
    }
  }

  public static MessageBuilder getMessage(MessageType messageType) {
    return errorMessageMap.get(messageType.getKey());
  }
}
