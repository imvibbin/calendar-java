import React, { useState } from 'react';

const HourRangeInput = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartTime = e.target.value;
    setStartTime(newStartTime);
    // Adjust the end time if necessary
    if (!endTime || new Date(endTime) <= new Date(newStartTime)) {
      const nextEndTime = new Date(newStartTime);
      nextEndTime.setMinutes(nextEndTime.getMinutes() + 15);
      setEndTime(nextEndTime.toISOString().substr(11, 5));
    }
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndTime = e.target.value;
    // Only set the end time if it's a valid interval
    if (isValidInterval(startTime, newEndTime)) {
      setEndTime(newEndTime);
    }
  };

  const isValidInterval = (start: string, end: string) => {
    const startDate = new Date(`1970-01-01T${start}:00`);
    const endDate = new Date(`1970-01-01T${end}:00`);
    const difference = Math.abs(startDate.getTime() - endDate.getTime());
    return difference % (15 * 60 * 1000) === 0;
  };

  return (
    <div>
      <label>Start Time:</label>
      <input
        type="time"
        value={startTime}
        onChange={handleStartTimeChange}
      />

      <label>End Time:</label>
      <input
        type="time"
        value={endTime}
        onChange={handleEndTimeChange}
      />
    </div>
  );
};

export default HourRangeInput;
