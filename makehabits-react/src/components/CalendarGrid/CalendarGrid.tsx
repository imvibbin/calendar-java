import React from 'react';
import './CalendarGrid.scss'; // Asegúrate de crear este archivo CSS para los estilos

const CalendarGrid = () => {
  const numRows = 16;
  const numCols = 8;
  const daysOfWeek = ['', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const daysOfMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'];
  const hourRange = ['','8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM','12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM','4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM','8:00 PM', '9:00 PM', '10:00 PM'];
  const generateCells = () => {
    const cells = [];
  
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const cellKey = `cell--${row}-${col}`;
        const color = getRandomColor();
        let cellContent = `${row},${col}`;
        let cellClass = "grid--cell";

        if (row === 0) {
          cellContent = daysOfWeek[col];
          cellClass = "grid--day";
        } else if (col === 0) {
          cellContent = hourRange[row];
          cellClass = "grid--hour";
        }
  
        cells.push(
          <div key={cellKey} className={cellClass} style={{ backgroundColor: color }}>
            {cellContent}
          </div>
        );
      }
    }
  
    return cells;
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
    <div className="grid">
      {generateCells()}
    </div>
  );
};

export default CalendarGrid;
/* import './CalendarGrid.scss';
const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const CalendarGrid = () => {
  const hours = [];
  for (let hour = 7; hour <= 22; hour++) {
    hours.push(<div key={hour}>{hour}:00
      
    </div>);
  }


  const dayColumns = daysOfWeek.map(day => (
    <div key={day} className="calendar--row">
      <div className="calendar--row">{day}</div>
      {}
    </div>
  ));

  return (
    <div className="calendar">
      <div className="calendar--row">
        {dayColumns}
      </div>
      <div className="calendar-column">
        {hours}
      </div>
    </div>
  );
};

export default CalendarGrid; */