import { useState } from "react";
import "./Test.css";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const months = [
  { name: "January", days: 31 },
  { name: "February", days: 28 },
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 },
];

const eventsData = {
  events: [
    { name: "event1", info: "hour02-day4", duration: 1 },
    { name: "event2", info: "hour09-day2", duration: 4 },
  ],
};

const Test = () => {
  const hours = Array.from({ length: 24 }, (_, index) => index);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [currentWeekStart, setCurrentWeekStart] = useState(1);
  const [addingEvent, setAddingEvent] = useState(false);
  const [selectedCell, setSelectedCell] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDuration, setEventDuration] = useState(1);

  const renderHoursColumn = () => {
    return (
      <>
        {hours.map((hour) => (
          <div key={hour} className="row">
            {/* Display the hour */}
            <div className="col d-flex align-items-center justify-content-center text-center p-4 border">
              {hour.toString().padStart(2, "0")}:00
            </div>
            {/* Loop through days */}
            {[...Array(7)].map((_, index) => {
              const currentDivId = `hour${hour
                .toString()
                .padStart(2, "0")}-day${index + 1}`;
              const event = eventsData.events.find(
                (event) => event.info === currentDivId,
              );

              if (event) {
                const eventDuration = event.duration || 1;
                const eventIndex = hours.indexOf(hour);

                // Create an array of cell IDs for the event's duration
                const eventCells = Array.from(
                  { length: eventDuration },
                  (_, i) =>
                    `hour${(hour + i).toString().padStart(2, "0")}-day${
                      index + 1
                    }`,
                );

                return (
                  // Render event cells
                  <div
                    key={`event-${index}`}
                    id={currentDivId}
                    className={`col border ${
                      addingEvent && selectedCell === currentDivId
                        ? "add-event"
                        : ""
                    }`}
                    onClick={() => handleCellClick(currentDivId)}
                  >
                    {eventCells.map((cellId, cellIndex) => (
                      // Display event name in the first cell
                      <div
                        key={`cell-${cellIndex}`}
                        className={`event d-flex align-items-center justify-content-center h-100 border`}
                      >
                        {cellIndex === 0 ? event.name : ""}
                      </div>
                    ))}
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
    });
    setAddingEvent(false);
    setSelectedCell("");
  };

  const displayWeek = () => {
    const currentMonth = months[currentMonthIndex];

    return (
      <>
        <div className="row week">
          <div className="col border"></div>
          {[...Array(7)].map((_, i) => {
            const dayNumber = currentWeekStart + i;

            if (dayNumber <= currentMonth.days) {
              return (
                <div
                  key={i}
                  className="col d-flex flex-column align-items-center justify-content-center text-center p-4 border"
                >
                  <div>{daysOfWeek[i]}</div>
                  <div>{dayNumber}</div>
                </div>
              );
            } else {
              return <div key={i} className="col border"></div>;
            }
          })}
        </div>
      </>
    );
  };

  return (
    <div className="week-container">
      {displayWeek()}
      {renderHoursColumn()}
    </div>
  );
};
export default Test;
