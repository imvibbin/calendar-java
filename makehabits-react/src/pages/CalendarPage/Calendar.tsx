import React from "react";
import WeekRender from "../../components/Calendar/WeekRender/WeekRender";
import HourRender from "../../components/Calendar/HourRender/HourRender";
import "./Calendar.css";

const CalendarPage = () => {
  return (
    <>
      <div className="week-container">
        <WeekRender />
        <HourRender />
      </div>
    </>
  );
};

export default CalendarPage;
