import { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import EventDisplay from "../EventDisplay/EventDisplay";
import EventCreator from "../EventCreator/EventCreator";
import "./HourRender.css";

const HourRender = () => {
  const hours = Array.from({ length: 24 }, (_, index) => index);
  const [addingEvent, setAddingEvent] = useState(false);
  const [selectedCell, setSelectedCell] = useState("");
  const [calendarSlotId, setCalendarSlotId] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [eventsData, setEventsData] = useState({
    events: [
      { name: "event1", info: "hour2-3/day4", duration: 60, days: 1 },
      { name: "event2", info: "hour9-10/day2", duration: 120, days: 4 },
    ],
  });

  const handleCellClick = (cellId: string) => {
    if (!addingEvent && !isDragging) {
      setAddingEvent(true);
      setSelectedCell(cellId);
    }
  };

  const saveEvent = (
    cellId: string,
    eventName: string,
    eventDuration: number,
  ) => {
    // Implement logic to save the event to your eventsData
    setEventsData((prevState) => ({
      ...prevState,
      events: [
        ...prevState.events,
        { name: eventName, info: cellId, duration: eventDuration, days: 1 },
      ],
    }));
    console.log(eventsData);
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

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    eventName: string,
  ) => {
    setIsDragging(false);
    handleDragCommon(info);
    setCalendarSlotId("");

    // Update the info property of the event with the new ID
    setEventsData((prevState) => ({
      ...prevState,
      events: prevState.events.map((event) =>
        event.name === eventName ? { ...event, info: calendarSlotId } : event,
      ),
    }));
    console.log(eventsData);
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
            const currentDivId = `hour${hour}-${(hour + 1) % 24}/day${
              index + 1
            }`;
            const event = eventsData.events.find(
              (event) => event.info === currentDivId,
            );
            const eventName = event?.name || "";
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
                {event && (
                  // Display EventDisplay component
                  <EventDisplay
                    eventData={event}
                    eventDuration={eventDuration}
                    eventDays={eventDays}
                    handleDragEnd={handleDragEnd}
                    handleDrag={handleDrag}
                    data-name={eventName}
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
