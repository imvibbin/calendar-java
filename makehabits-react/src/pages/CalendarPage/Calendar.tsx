import React from "react";
import WeekRender from "../../components/Calendar/WeekRender/WeekRender";
import HourRender from "../../components/Calendar/HourRender/HourRender";
import "./Calendar.css";

interface WeeklyViewProps {
  weeklyViewData: string[]; // Replace 'any' with the appropriate type for your data
}

const CalendarPage: React.FC<WeeklyViewProps> = ({ weeklyViewData }) => {
  return (
    <>
      <div className="row week-container h-100">
        <WeekRender weeklyViewData={weeklyViewData} />
        <HourRender weeklyViewData={weeklyViewData} />
      </div>
    </>
  );
};

export default CalendarPage;
