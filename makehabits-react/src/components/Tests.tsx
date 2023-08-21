import { useState } from "react";
import "./CalendarDay.css";
// ... (import statements and CSS imports remain the same)

function CalendarDay() {
  const hours = Array.from({ length: 24 }, (_, index) => index);

  const [startIndex, setStartIndex] = useState(-1);
  const [endIndex, setEndIndex] = useState(-1);
  const [resizing, setResizing] = useState(false);

  const handleMouseDown = (index: number) => {
    setStartIndex(index);
    setEndIndex(index);
    setResizing(true);
  };

  const handleMouseMove = (index: number) => {
    if (resizing) {
      if (index < startIndex) {
        setEndIndex(startIndex);
        setStartIndex(index);
      } else {
        setEndIndex(index);
      }
    }
  };

  const handleMouseUp = () => {
    setResizing(false);
  };

  return (
    <div className="container">
      <div className="time-column">
        {hours.map((hour, index) => (
          <div className="row user-select-none" key={hour}>
            <div className="col border hour-cell">{`${hour}:00`}</div>
            <div
              className="col resizable-column"
            >
              <div
                className={`border resizable-cell ${
                  index >= startIndex && index <= endIndex ? "bg-success" : ""
                }`}
                onMouseDown={() => handleMouseDown(index)}
                onMouseMove={() => handleMouseMove(index)}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarDay;
