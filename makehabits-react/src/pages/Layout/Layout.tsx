import { useState /* useEffect */ } from "react";
import WeeklyView from "../../components/WeeklyView/WeeklyView";
import CalendarPage from "../CalendarPage/Calendar";
import MonthCalendarLib from "../../components/Lib/AntLib/MonthCalendarLib/MonthCalendarLib";
import PopUpLib from "../../components/Lib/AntLib/PopUpLib/PopUpLib";
import EventShowCase from "../../components/Elements/EventShowCase/EventShowCase";
import NavBar from "../../components/Elements/NavBar/NavBar";
/* import type { Dayjs } from 'dayjs'; */
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
type StringArray = string[];
import "./Layout.scss/";
const Sidebar = ({ onCalendarWeekChange }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__MonthCalendarLib">
        <MonthCalendarLib onCalendarWeekChange={onCalendarWeekChange} />
      </div>
      <div className="sidebar__eventShowCase">
        <h3>Activity List</h3>
        <PopUpLib />
        <EventShowCase />
      </div>
    </aside>
  );
};

const Layout = () => {
  const generateInitialWeeklyData = () => {
    dayjs.extend(isSameOrBefore);
    const currentDate = dayjs();
    const startOfWeek = currentDate.startOf("week");
    const endOfWeek = currentDate.endOf("week");

    const days = [];
    let currentDay = startOfWeek;

    while (dayjs(currentDay).isSameOrBefore(endOfWeek, "day")) {
      days.push(currentDay.format("YYYY-MM-DD"));
      currentDay = currentDay.add(1, "day");
    }

    return days;
  };
  const handlePreviousWeek = () => {
    setWeeklyViewData(newData);
  };

  const handleNextWeek = () => {
    setWeeklyViewData(newData);
  };
  const handleWeekSelection = (newDaysOfWeek: string[]) => {
    // Update the daysOfWeek array

    // You can also update other data or state as needed
    setWeeklyViewData(newDaysOfWeek);
    console.log(weeklyViewData);
  };

  const initialWeeklyViewData = generateInitialWeeklyData();
  const [weeklyViewData, setWeeklyViewData] = useState<StringArray>(initialWeeklyViewData);

  // return (
  //   <div className="layout">
  //     <NavBar previousWeek={handlePreviousWeek} nextWeek={handleNextWeek} />
  //     <div className="content-wrapper">
  //       <main className="main-content">
  //         <WeeklyView weeklyViewData={weeklyViewData} />
  //       </main>
  //       <Sidebar onCalendarWeekChange={handleWeekSelection} />
  //     </div>
  //   </div>
  // );

  return (
    <div className="layout">
      <NavBar previousWeek={handlePreviousWeek} nextWeek={handleNextWeek} />
      <div className="content-wrapper">
        <main className="main-content">
          <CalendarPage weeklyViewData={weeklyViewData} />
        </main>
        <Sidebar onCalendarWeekChange={handleWeekSelection} />
      </div>
    </div>
  );
};

export default Layout;

/*   useEffect(() => {
    // Update weeklyViewData when newData changes
    setWeeklyViewData(newData);
  }, [newData]);

  */
