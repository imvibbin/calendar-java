import { useState } from "react";
import "./HourRows.css";

const eventsData = {
  events: [
    { name: "event1", info: "hour02-day4", duration: 1, days: 1 },
    { name: "event2", info: "hour09-day2", duration: 2, days: 2 },
  ],
};

const HourRows = () => {
  const hours = Array.from({ length: 24 }, (_, index) => index);
  const [addingEvent, setAddingEvent] = useState(false);
  const [selectedCell, setSelectedCell] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDuration, setEventDuration] = useState(1);

  const handleCellClick = (cellId: string) => {
    if (!addingEvent) {
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
    eventsData.events.push({
      name: eventName,
      info: cellId,
      duration: eventDuration,
      days: 1,
    });
    console.log(eventsData);
    setAddingEvent(false);
    setSelectedCell("");
  };

  return (
    <>
      {hours.map((hour) => (
        <div key={hour} className="row">
          {/* Display the hour */}
          <div className="col cell d-flex align-items-center justify-content-center text-center p-4 border">
            {hour.toString().padStart(2, "0")}:00
          </div>
          {/* Loop through days */}
          {[...Array(7)].map((_, index) => {
            const currentDivId = `hour${hour.toString().padStart(2, "0")}-day${
              index + 1
            }`;
            const event = eventsData.events.find(
              (event) => event.info === currentDivId,
            );

            if (event) {
              const eventDuration = event.duration || 1;
              const eventDays = event.days || 1;

              return (
                // Inside your HourRows component's return statement
                <div
                  key={`event-${index}`}
                  id={currentDivId}
                  className={`col border position-relative ${
                    addingEvent && selectedCell === currentDivId
                      ? "add-event"
                      : ""
                  }`}
                  onClick={() => handleCellClick(currentDivId)}
                >
                  {event && (
                    // Display event as an absolutely positioned div
                    <div
                      className="event d-flex align-items-center justify-content-center p-2"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: `${eventDays * 100}%`, // Event spans the entire cell width
                        height: `${eventDuration * 100}%`, // Adjust the height based on event duration
                        backgroundColor: "#5852FF", // Add your preferred styling here
                      }}
                    >
                      <div className="event-photo h-100 border"></div>
                      <div className="event-info h-100 border">
                        {event.name}
                      </div>
                      <div className="event-info-duration h-100 border">
                        10:00
                      </div>
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                // Render blank cells
                <div
                  key={`blank-${index}`}
                  id={currentDivId}
                  className={`col border ${
                    addingEvent && selectedCell === currentDivId
                      ? "add-event"
                      : ""
                  }`}
                  onClick={() => handleCellClick(currentDivId)}
                >
                  {addingEvent && selectedCell === currentDivId && (
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
                        onChange={(e) =>
                          setEventDuration(Number(e.target.value))
                        }
                      />
                      <button
                        onClick={() =>
                          saveEvent(currentDivId, eventName, eventDuration)
                        }
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
      ))}
    </>
  );
};

export default HourRows;
