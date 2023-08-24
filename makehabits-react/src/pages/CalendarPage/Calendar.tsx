import React from "react";
import WeekRow from "../../components/Calendar/WeekRow";
import HourRows from "../../components/Calendar/HourRows";

const CalendarPage = () => {
  return (
    <>
      <div className="week-container">
        <WeekRow />
        <HourRows />
      </div>
    </>
  );
};

export default CalendarPage;
