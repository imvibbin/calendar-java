import { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import EventDisplay from "../EventDisplay/EventDisplay";
import EventCreator from "../EventCreator/EventCreator";
import UserInterface from "../../../models/UserInterface";
import Habit from "../../../models/Habit";
import Appointment from "../../../models/Appointment";
import "./HourRender.css";

const HourRender = () => {
  const userData: UserInterface =
    JSON.parse(localStorage.getItem("USER_DATA") ?? "{}") || null;

  const generateEventsFromUserData = (userData: UserInterface) => {
    return userData.activities.map((activity) => {
      const name = activity.task_name;
      const eventId = activity.task_id;
      const [startHourStr, endHourStr] = activity.task_hour_range.split("|");
      const [startHour, startMinute] = startHourStr.split(":").map(Number);
      const [endHour, endMinute] = endHourStr.split(":").map(Number);
      const duration = (endHour - startHour) * 60 + (endMinute - startMinute);
      console.log(duration);

      if (
        activity.task_type === "habit" &&
        "task_habit_repetitions" in activity
      ) {
        const habit = activity as Habit;
        const days = habit.task_habit_repetitions;
        const info = `hour${startHour}/day${days}`;

        return { eventId, name, info, duration, days };
      } else if (
        activity.task_type === "appointment" &&
        "task_date_range" in activity
      ) {
        const appointment = activity as Appointment;
        const [startDate, endDate] = appointment.task_date_range.split("|");
        const [day_start, month_start, year_start] = startDate.split("-");
        const startDateObject = new Date(
          `${month_start}-${day_start}-${year_start}`,
        );

        const [day_end, month_end, year_end] = endDate.split("-");
        const endDateObject = new Date(`${month_end}-${day_end}-${year_end}`);

        const days =
          Math.ceil(
            (endDateObject.getTime() - startDateObject.getTime()) /
              (1000 * 60 * 60 * 24),
          ) + 1;

        const info = `hour${startHour}/day${startDateObject.getDay() + 1}`;

        return { eventId, name, info, duration, days };
      } else {
        return null;
      }
    });
  };

  const hours = Array.from({ length: 24 }, (_, index) => index);
  const [addingEvent, setAddingEvent] = useState(false);
  const [selectedCell, setSelectedCell] = useState("");
  const [calendarSlotId, setCalendarSlotId] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [eventsData, setEventsData] = useState({
    events: generateEventsFromUserData(userData),
  });

  const handleCellClick = (cellId: string) => {
    if (!addingEvent && !isDragging) {
      setAddingEvent(true);
      setSelectedCell(cellId);
    }
  };

  // TODO: implement modal
  const saveEvent = (
    cellId: string,
    eventName: string,
    eventDuration: number,
  ) => {
    setAddingEvent(false);
    setSelectedCell("");
  };

  const handleDragCommon = (info: PanInfo) => {
    setCalendarSlotId("");
    const slots = document.querySelectorAll(".calendar-slot");
    slots.forEach((slot) => {
      const rect = slot.getBoundingClientRect();
      if (
        info.point.x > rect.left &&
        info.point.x < rect.right &&
        info.point.y > rect.top &&
        info.point.y < rect.bottom
      ) {
        const id = slot.getAttribute("id") || "";
        setCalendarSlotId(id);
      }
    });
  };

  // TODO: implement drag
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    eventId: number,
  ) => {
    setIsDragging(false);
    handleDragCommon(info);
    setCalendarSlotId("");

    // Update eventsData
    setEventsData((prevState) => ({
      ...prevState,
      events: prevState.events.map((event) =>
        event.eventId === eventId
          ? { ...event, info: calendarSlotId }
          : event,
      ),
    }));
  };

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    setIsDragging(true);
    handleDragCommon(info);
  };

  // Main component
  return (
    <>
      {hours.map((hour) => (
        <div key={hour} className="row row-height w-100">
          {/* Display the hour */}
          <div className="col d-flex align-items-center justify-content-center text-center">
            {hour}:00 - {(hour + 1) % 24}:00
          </div>
          {/* Loop through days */}
          {[...Array(7)].map((_, index) => {
            const currentDivId = `hour${hour}/day${index + 1}`;
            const event = eventsData.events.find(
              (event) => event?.info === currentDivId,
            );
            const eventDuration = event?.duration || 60;
            const eventDays = event?.days || 1;
            const isAddingEvent = addingEvent && selectedCell === currentDivId;

            return (
              <motion.div
                key={`event-${index}`}
                id={currentDivId}
                className={`col calendar-slot position-relative h-100 ${
                  isAddingEvent ? "add-event" : ""
                } ${
                  calendarSlotId === currentDivId ? "dragging-indicator" : ""
                }`}
                onClick={() => handleCellClick(currentDivId)}
              >
                {event && eventsData.events.length > 0 && (
                  // Display EventDisplay component
                  <EventDisplay
                    eventData={event}
                    eventDuration={eventDuration}
                    eventDays={eventDays}
                    handleDragEnd={handleDragEnd}
                    handleDrag={handleDrag}
                  />
                )}
                {!event && isAddingEvent && (
                  // Render BlankCell component only if isAddingEvent is true
                  <EventCreator
                    currentDivId={currentDivId}
                    isAddingEvent={isAddingEvent}
                    saveEvent={saveEvent}
                    handleCellClick={handleCellClick}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default HourRender;
