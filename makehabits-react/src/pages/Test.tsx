import React, { useState } from "react";
import { motion } from "framer-motion";

const hours = Array.from({ length: 24 }, (_, i) => i);
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Test = () => {
  const [eventDay, setEventDay] = useState<number | null>(2);
  const [eventHour, setEventHour] = useState<number | null>(10);
  const [draggingOverDay, setDraggingOverDay] = useState<number | null>(null);
  const [draggingOverHour, setDraggingOverHour] = useState<number | null>(null);
  const [dragCount, setDragCount] = useState(0);

  const handleDragEnd = (event, info) => {
    setDraggingOverDay(null);
    setDraggingOverHour(null);
    const slots = document.querySelectorAll(".calendar-slot");
    slots.forEach((slot) => {
      const rect = slot.getBoundingClientRect();
      if (
        info.point.x > rect.left &&
        info.point.x < rect.right &&
        info.point.y > rect.top &&
        info.point.y < rect.bottom
      ) {
        const day = parseInt(slot.getAttribute("data-day") || "");
        const hour = parseInt(slot.getAttribute("data-hour") || "");
        console.log(`dragEnd | hour: ${hour} day: ${day}`);
        setEventDay(day);
        setEventHour(hour);
        // Increment the dragCount state value every time the event is dragged
        setDragCount((prevCount) => prevCount + 1);
      }
    });
  };

  const handleDrag = (event, info) => {
    setDraggingOverDay(null);
    setDraggingOverHour(null);
    const slots = document.querySelectorAll(".calendar-slot");
    slots.forEach((slot) => {
      const rect = slot.getBoundingClientRect();
      if (
        info.point.x > rect.left &&
        info.point.x < rect.right &&
        info.point.y > rect.top &&
        info.point.y < rect.bottom
      ) {
        const day = parseInt(slot.getAttribute("data-day") || "");
        const hour = parseInt(slot.getAttribute("data-hour") || "");
        console.log(`drag | hour: ${hour} day: ${day}`);
        setDraggingOverDay(day);
        setDraggingOverHour(hour);
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        {days.map((day) => (
          <div key={day} className="col">
            {day}
          </div>
        ))}
      </div>
      {hours.map((hour) => (
        <div key={hour} className="row">
          <div className="col border">
            {hour}:00 - {(hour + 1) % 24}:00
          </div>
          {days.map((day, dayIndex) => (
            <div
              key={day}
              className={
                "col border calendar-slot p-3 " +
                (draggingOverDay === dayIndex && draggingOverHour === hour
                  ? "bg-warning"
                  : "")
              }
              data-day={dayIndex}
              data-hour={hour}
            >
              {eventDay === dayIndex && eventHour === hour && (
                <motion.div
                  // Add a key prop that changes every time the event is dragged
                  key={dragCount}
                  drag
                  onDragEnd={handleDragEnd}
                  onDrag={handleDrag}
                  className="bg-success p-2"
                  style={{ cursor: "grab" }}
                >
                  Event
                </motion.div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Test;
