import React, { useState } from "react";

interface EventCreator {
  currentDivId: string;
  isAddingEvent: boolean;
  saveEvent: (
    currentDivId: string,
    eventName: string,
    eventDuration: number,
  ) => void;
  handleCellClick: (currentDivId: string) => void;
}

const EventCreator: React.FC<EventCreator> = ({
  currentDivId,
  isAddingEvent,
  saveEvent,
  handleCellClick,
}) => {
  const [eventName, setEventName] = useState("");
  const [eventDuration, setEventDuration] = useState(60);

  return (
    <div
      id={currentDivId}
      className={`col border ${isAddingEvent ? "add-event" : ""}`}
      onClick={() => handleCellClick(currentDivId)}
    >
      {isAddingEvent && (
        // Render event overlay for adding new event
        <div className="event-overlay">
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Duration"
            value={eventDuration}
            onChange={(e) => setEventDuration(Number(e.target.value))}
          />
          <button
            onClick={() => saveEvent(currentDivId, eventName, eventDuration)}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EventCreator;
