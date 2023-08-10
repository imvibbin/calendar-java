import React, { useState } from 'react';

function DateInput() {
  const [inputDate, setInputDate] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [dateObject, setDateObject] = useState(null);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setInputDate(selectedDate);

    // Convert the input date to a Date object
    const parsedDate = new Date(selectedDate);

    // Check if the parsedDate is a valid Date
    if (!isNaN(parsedDate)) {
      const formatted = parsedDate.toDateString();
      setFormattedDate(formatted);
      
      // Save the formatted date in an object
      setDateObject({original: selectedDate, formatted: formatted });
    } else {
      setFormattedDate('Invalid date');
      setDateObject(null);
    }
  };

  return (
    <div>
      <label htmlFor="dateInput">Enter a Date: </label>
      <input
        type="date"
        id="dateInput"
        value={inputDate}
        onChange={handleDateChange}
      />

      <div>
        <p>Formatted Date: {formattedDate}</p>
        {dateObject && (
          <div>
            
            <p>Formatted Date in Object: {inputDate}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DateInput;