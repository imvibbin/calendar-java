/* import React from "react"; */
import WeeklyView from "../../components/WeeklyView/WeeklyView";
import MonthCalendarLib from "../../components/Lib/AntLib/MonthCalendarLib/MonthCalendarLib";
import PopUpLib from "../../components/Lib/AntLib/PopUpLib/PopUpLib";
import "./Layout.scss"; // Import your CSS file for styling
/* import { useNavigate } from "react-router-dom"; */
import EventShowCase from "../../components/Elements/EventShowCase/EventShowCase";
import NavBar from "../../components/Elements/NavBar/NavBar";
import CalendarPage from "../../pages/CalendarPage/Calendar";
/* const Header = () => {
  
  
  );
}; */

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div>
        <MonthCalendarLib />
      </div>
      <div>
        <h3>Activity List</h3>
        <PopUpLib />
        <EventShowCase />
      </div>
    </aside>
  );
};
const MainContent = () => {
  return (
/*     <main className="main-content">
      <CalendarPage />
    </main> */
     <main className="main-content">
       <WeeklyView />
     </main>
  );
};

const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <div className="content-wrapper">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
