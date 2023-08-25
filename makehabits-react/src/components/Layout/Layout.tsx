/* import React from "react"; */
import WeeklyView from "../WeeklyView/WeeklyView";
import MonthCalendarLib from "../Lib/AntLib/MonthCalendarLib/MonthCalendarLib";
import PopUpLib from "../Lib/AntLib/PopUpLib/PopUpLib";
import "./Layout.scss"; // Import your CSS file for styling
/* import { useNavigate } from "react-router-dom"; */
import EventShowCase from "../Elements/EventShowCase/EventShowCase";
import NavBar from "../Elements/NavBar/NavBar";
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
    <main className="main-content">
      <WeeklyView />
    </main>
  );
};

const Layout = () => {
  return (
    <div className="layout">
      <NavBar/>
      <div className="content-wrapper">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
