import { useState } from "react";
import "./WeekRender.css";

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
const WeekRender = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(8);
  const [currentWeekStart, setCurrentWeekStart] = useState(1);

  const currentMonth = months[currentMonthIndex];

  return (
    <>
      <div className="row week w-100">
        <div className="col"></div>
        {[...Array(7)].map((_, i) => {
          const dayNumber = currentWeekStart + i;

          if (dayNumber <= currentMonth.days) {
            return (
              <div
                key={i}
                className="col day-display d-flex flex-column align-items-center justify-content-center text-center"
              >
                <div>{daysOfWeek[i]}</div>
                <div>{dayNumber}</div>
              </div>
            );
          } else {
            return <div key={i} className="col"></div>;
          }
        })}
      </div>
    </>
  );
};

export default WeekRender;
