import React from 'react';
import './CalendarGrid.scss'; // Make sure to create this CSS file for styling

const CalendarGrid = () => {
  const numRows = 16;
  const numCols = 8;
  const daysOfWeek = ['', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const daysOfMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'];
  const hourRange = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM','12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM','4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM','8:00 PM', '9:00 PM', '10:00 PM'];
  

  const generateDayCells = () => { 
    const DayCells = [];
    for (let col = 0; col < numCols; col++) {

      const cellKey = `cell--${0}-${col}`;
      let cellContent = daysOfWeek[col];
      let cellDayClass = "grid--day--cell";
      let cellStyle = {
        backgroundColor: getRandomColor()
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
      let cellContent = hourRange[row];
      let cellHourClass = "grid--hour--cell";
      let cellStyle = {
        backgroundColor: getRandomColor()
      };
      
      HourCells.push(
        <div key={cellKey} className={cellHourClass} style={cellStyle}>
          {cellContent}
        </div>
      );
    }
    return HourCells;
  };


  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="CalendarUI">
      <div className="dayHeader">{generateDayCells()}</div>
   

      <div className="grid">
        <div className="grid--hour">
        {generateTimeCells()}
        </div>
        <div className="grid--calendar"></div>
        </div>
    </div>
  );
};

export default CalendarGrid;
/*   const events = [
    { title: 'Meeting', startRow: 1, endRow: 3, startCol: 1, endCol: 2 },
    { title: 'Lunch', startRow: 5, endRow: 7, startCol: 2, endCol: 5 },
    // Add more events here with their start and end rows/columns
  ]; */

/*  const generateCells = () => {
    const cells = [];
    const eventCells = Array.from({ length: numRows }, () => new Array(numCols).fill(null));

    events.forEach(event => {
      for (let row = event.startRow; row <= event.endRow; row++) {
        for (let col = event.startCol; col <= event.endCol; col++) {
          eventCells[row][col] = {
            title: event.title,
            color: getRandomColor()
          };
        }
      }
    });

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const cellKey = `cell--${row}-${col}`;
        const eventCell = eventCells[row][col];

        let cellContent = `${row},${col}`;
        let cellClass = "grid--cell";
        let cellStyle = {};

        if (eventCell) {
          cellContent = eventCell.title;
          cellClass = "grid--event-cell";
          cellStyle = {
            backgroundColor: eventCell.color,
            gridColumn: `span ${eventCell.endCol - eventCell.startCol + 1}`,
            gridRow: `span ${eventCell.endRow - eventCell.startRow + 1}`
          };
        } else if (row === 0) {
          cellContent = daysOfWeek[col];
          cellClass = "grid--day";
        } else if (col === 0) {
          cellContent = hourRange[row];
          cellClass = "grid--hour";
        }
  
        cells.push(
          <div key={cellKey} className={cellClass} style={cellStyle}>
            {cellContent}
          </div>
        );
      }
    }
  
    return cells;
  }; */



/*   const generateDayCells = () => { 
    const DayCells = [1];
    for (let col = 0; col < numCols; col++) {
      
    }
    return DayCells;
  };
  const generateCells = () => {
    const cells = [];
    const eventCells = Array.from({ length: numRows }, () => new Array(numCols).fill(null));

    events.forEach(event => {
      for (let row = event.startRow; row <= event.endRow; row++) {
        for (let col = event.startCol; col <= event.endCol; col++) {
          eventCells[row][col] = {
            title: event.title,
            color: getRandomColor()
          };
        }
      }
    });

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const cellKey = `cell--${row}-${col}`;
        const eventCell = eventCells[row][col];

        let cellContent = `${row},${col}`;
        let cellClass = "grid--cell";
        let cellStyle = {};

        if (eventCell) {
          cellContent = eventCell.title;
          cellClass = "grid--event-cell";
          cellStyle = {
            backgroundColor: eventCell.color,
            gridColumn: `span ${eventCell.endCol - eventCell.startCol + 1}`,
            gridRow: `span ${eventCell.endRow - eventCell.startRow + 1}`
          };
        } else if (row === 0) {
          cellContent = daysOfWeek[col];
          cellClass = "grid--day";
        } else if (col === 0) {
          cellContent = hourRange[row];
          cellClass = "grid--hour";
        }
  
        cells.push(
          <div key={cellKey} className={cellClass} style={cellStyle}>
            {cellContent}
          </div>
        );
      }
    }
  
    return cells;
  }; */
