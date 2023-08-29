import { useState } from "react";
import "./WeekRender.css";

interface WeeklyViewProps {
  weeklyViewData: string[]; // Replace 'any' with the appropriate type for your data
}

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WeekRender: React.FC<WeeklyViewProps> = ({ weeklyViewData }) => {
  return (
    <>
      <div className="row week w-100">
        <div className="col"></div>
        {[...Array(7)].map((_, i) => {
          const dayNumber = weeklyViewData[i];

          return (
            <div
              key={i}
              className="col day-display d-flex flex-column align-items-center justify-content-center text-center"
            >
              <div>{daysOfWeek[i]}</div>
              <div>{dayNumber}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeekRender;
