/* import React from 'react'; */
import "./WeeklyView.css"; // Make sure to create this CSS file for styling
import "./WeeklyView.scss"; // Make sure to create this CSS file for styling
import TimeCells from "../Lib/DraggableLib/TimeCells";
interface WeeklyViewProps {
  weeklyViewData: string[]; // Replace 'any' with the appropriate type for your data
}
const WeeklyView: React.FC<WeeklyViewProps> = ({ weeklyViewData }) => {
  const numRows = 16;
  const numCols = 8;
  const daysOfWeek = ["", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
  /* const daysOfMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'];*/
  const hourRange = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
  ];

  const generateDayCells = () => {
    const DayCells = [];
    console.log(weeklyViewData);
    for (let col = 0; col < numCols; col++) {
      const cellKey = `cell--${0}-${col}`;
      const cellContent = daysOfWeek[col] + weeklyViewData[col-1];
      const cellDayClass = "grid--day--cell";
      const cellStyle = {
        backgroundColor: "white",
      };

      DayCells.push(
        <div key={cellKey} className={cellDayClass} style={cellStyle}>
          {cellContent}
        </div>
      );
    }
    return DayCells;
  };

  const generateTimeCells = () => {
    
    const HourCells = [];
    for (let row = 0; row < numRows; row++) {
      const cellKey = `cell--${row}-${0}`;
      const cellContent = hourRange[row];
      const cellHourClass = "grid--hour--cell";
      const cellStyle = {
        backgroundColor: "white",
      };

      HourCells.push(
        <div key={cellKey} className={cellHourClass} style={cellStyle}>
          {cellContent}
        </div>
      );
    }
    return HourCells;
  };

  const GridComponent: React.FC = () => {
    const numRows = 7;
    const numCols = 7;

    const generateGrid = () => {
      const rows = [];
      for (let i = 0; i < numRows; i++) {
        const cols = [];
        for (let j = 0; j < numCols; j++) {
          cols.push(<div key={j} className=" calendar-cell"></div>);
        }
        rows.push(
          <div key={i} className=" calendar-row">
            {cols}
          </div>
        );
      }
      return rows;
    };

    return (
      <div className="mask">
        {generateGrid()}
      </div>
    );
  };

  return (
    <div className="CalendarUI">
      <div className="dayHeader">{generateDayCells()}</div>

      <div className="grid">
        <div className="grid--hour">{generateTimeCells()}</div>
        <div className="grid--calendar">
          <GridComponent />
          <TimeCells />
        </div>
      </div>
    </div>
  );
};

export default WeeklyView;
