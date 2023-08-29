import React from "react";
import WeekRender from "../../components/Calendar/WeekRender/WeekRender";
import HourRender from "../../components/Calendar/HourRender/HourRender";
import "./Calendar.css";

const CalendarPage = () => {
  return (
    <>
      <div className="row week-container h-100">
        <WeekRender />
        <HourRender />
      </div>
    </>
  );
};

export default CalendarPage;
