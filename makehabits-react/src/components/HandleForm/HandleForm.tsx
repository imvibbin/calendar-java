import React, { useState, ChangeEvent } from 'react';

const HandleForm = () => {
    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        type: 'activity',
        selectedDates: [] as string[], // Initialize selectedDates as an empty array
    });

    const [selectedDates, setSelectedDates] = useState<string[]>([]);
    const [formattedDate, setFormattedDate] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
    ...prevData,
    [name]: value,
    }));
};

const handleDate = (e:ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setSelectedDates((prevDates) => [...prevDates, selectedDate]);
};
const 
/* const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setSelectedDates((prevDates) => [...prevDates, selectedDate]);
};
const toggleDay = (day: string) => {
    if (selectedDates.includes(day)) {
        setSelectedDates((prevDays) => prevDays.filter((d) => d !== day));
    } else {
        setSelectedDates((prevDays) => [...prevDays, day]);
    }
}; */
const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedType = e.target.value;
    setEventData((prevData) => ({
    ...prevData,
    type: selectedType,
    }));
    setEventData((prevData) => ({
        ...prevData,
        selectedDates: [],
    }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jsonEventData = JSON.stringify(eventData);
    console.log(jsonEventData); 
    // You can then send this JSON to your API or use it as needed.
};

return (
    <form onSubmit={handleSubmit}>
    <div>{/* TITLE INPUT */}
        <label>Title:</label>
        <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleInputChange}
        />
    </div>
    <div>{/* DESCRIPTION INPUT */}
        <label>Description</label>
        <input
            type="text"
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
        />
    </div>
    <div>{/* TYPE OF ACTIVITY  */}
        <label>Type:</label>
        <label>
        <input
            type="radio"
            name="type"
            value="habit"
            checked={eventData.type === 'habit'}
            onChange={handleRadioChange}
        />
        Habit
        </label>
        <label>
        <input
            type="radio"
            name="type"
            value="activity"
            checked={eventData.type === 'activity'}
            onChange={handleRadioChange}
        />
        Activity
        </label>
    </div>
    
    {eventData.type === 'habit' && (/* HANDLE FORM INPUT FOR HABITS */
        <div>
            <p>Select Habit Days:</p>
            {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
            <label key={day} className={`circular-checkbox ${selectedDates.includes(day) ? 'selected' : ''}`}>
                <input
                type="checkbox"
                value={day}
                checked={selectedDates.includes(day)}
                onChange={() => toggleDay(day)}
                />
            {day}
            </label>
        ))}
        </div>
    )}
    <div>
        <label>
          Selected Dates:
          {selectedDates.map((date, index) => (
            <span key={index}>{date}, </span>
          ))}
        </label>
    </div>
      {eventData.type === 'activity' && (/* HANDLE FORM INPUT FOR ACTIVITIES */
      <div>
        <label>
          Choose Date:
          <input
            type="date"
            name="date"
            onChange={handleDateChange}
            value={selectedDates[selectedDates.length - 1] || ''}
          />
        </label>
      </div>
    )}
    <button type="submit" >Create Event</button>
    </form>
);
};

export default HandleForm;