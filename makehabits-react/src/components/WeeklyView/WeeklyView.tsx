/* import React from 'react'; */
import './WeeklyView.scss'; // Make sure to create this CSS file for styling
import TimeCells from '../Lib/DraggableLib/TimeCells'

const WeeklyView = () => {
  const numRows = 16;
  const numCols = 8;
  const daysOfWeek = ['', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  /* const daysOfMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'];*/
  const hourRange = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM','12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM','4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM','8:00 PM', '9:00 PM', '10:00 PM'];
  

  const generateDayCells = () => { 
    const DayCells = [];
    for (let col = 0; col < numCols; col++) {

      const cellKey = `cell--${0}-${col}`;
      const cellContent = daysOfWeek[col];
      const cellDayClass = "grid--day--cell";
      const cellStyle = {
        backgroundColor: 'white'
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
        backgroundColor: 'white'
      };
      
      HourCells.push(
        <div key={cellKey} className={cellHourClass} style={cellStyle}>
          {cellContent}
        </div>
      );
    }
    return HourCells;
  };




  return (
    <div className="CalendarUI">
      <div className="dayHeader">{generateDayCells()}</div>

      <div className="grid">
        <div className="grid--hour">
        {generateTimeCells()}
        </div>
        <div className="grid--calendar">
{/*         <div className="under-mask">
      {Array.from({ length: 105 }, (_, index) => (
        <div key={index} className="under-mask--cell">
            
        </div>
      ))}
    </div> */}
    <TimeCells/>
          {/* <div className='calendar--row'>1</div>
          <div className='calendar--row'>2</div>
          <div className='calendar--row'>3</div>
          <div className='calendar--row'>4</div>
          <div className='calendar--row'>5</div>
          <div className='calendar--row'>6</div>
          <div className='calendar--row'>7</div> */}
        </div>
        </div>
    </div>
  );
};

export default WeeklyView;