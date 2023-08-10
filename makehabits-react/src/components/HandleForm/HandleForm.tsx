import React, { useState, ChangeEvent } from 'react';

const HandleForm = () => {
const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    type: 'activity',
});
    const [selectedDates, setSelectedDates] = useState<string[]>([]);
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
    ...prevData,
    [name]: value,
    }));
};

const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedType = e.target.value;
    setEventData((prevData) => ({
    ...prevData,
    type: selectedType,
    }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jsonEventData = JSON.stringify(eventData);
    console.log(jsonEventData); // Display the JSON string in the console
    // You can then send this JSON to your API or use it as needed.
};

return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>Title:</label>
        <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleInputChange}
        />
    </div>
    <div>
        <label>Date:</label>
        <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleInputChange}
        />
    </div>
    <div>
        <label>Description</label>
        <input
            type="text"
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
        />
    </div>
    <div>
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
    {eventData.type === 'habit' && (
        <div>
            <div className="checkbox-list">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <label key={day} className={`circular-checkbox ${selectedDays.includes(day) ? 'selected' : ''}`}>
                    <input
                    type="checkbox"
                    value={day}
                    checked={selectedDays.includes(day)}
                    onChange={() => toggleDay(day)}
                    />
                    {day}
                </label>
                ))}
            </div>
    </div>
    )}
    <button type="submit">Create Event</button>
    </form>
);
};

export default HandleForm;