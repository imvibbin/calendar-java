import Modal from 'react-bootstrap/Modal';
import './PopUp.scss';
import { useState, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';

import HandleForm from "../HandleForm/HandleForm";
import ActivityInterface from "../../models/ActivityInterface";
const PopUp = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [eventData, setEventData] = useState<ActivityInterface>({
      title: '',
      description: '',
      type: 'activity',
      eventDate: [], 
      habitDays: [],
  });

  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  

  const handleDateChange = (startDate: string, endDate: string) => {
      const startTimestamp = Date.parse(startDate);
      const endTimestamp = Date.parse(endDate);

      // Check if startDate is set and endDate is not a previous date
      if (startTimestamp && (!endTimestamp || endTimestamp >= startTimestamp)) {
          setEventData({
          ...eventData,
          eventDate: [startDate, endDate],
          });
      }
  };

  const handleDayCheckboxChange = (day: number) => {
      console.log(day);
      if(eventData.type === 'habit') {
      
      const updatedDays = eventData.habitDays.includes(day)
      ? eventData.habitDays.filter((d) => d !== day)
      : [...eventData.habitDays, day];
  
      setEventData({
      ...eventData,
      habitDays: updatedDays,
      });
  }
  };

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
  habitDays: [],
  }));
  
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const jsonEventData = JSON.stringify(eventData);
  console.log(jsonEventData); 
  // You can then send this JSON to your API or use it as needed.
};

    


    return (
    <>



      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
        </Button>
    
        <Modal show={show} onHide={handleClose}>

        <article className="card">
            <section className="card-time">
            {eventData.type === 'activity' && (/* HANDLE FORM INPUT FOR HABITS */
        <div>
            <label>Start Date:</label>
            <input
            type="date"
            value={eventData.eventDate[0] || ''}
            onChange={(e) => {
                const selectedStartDate = e.target.value;
                const nextDay = new Date(selectedStartDate);
                nextDay.setDate(nextDay.getDate() + 1);
                const formattedNextDay = nextDay.toISOString().substr(0, 10);
                handleDateChange(selectedStartDate, formattedNextDay);
            }}
            required
            />

            <label>End Date:</label>
            <input
            type="date"

            value={eventData.eventDate[1] || ''}
            onChange={(e) => handleDateChange(eventData.eventDate[0], e.target.value)}
            required
            />
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
      {eventData.type === 'habit' && (/* HANDLE FORM INPUT FOR ACTIVITIES */
    <div>
        <div>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'].map((day, index) => (
        <label key={index}>
            <input 
                type="checkbox"
                checked={eventData.habitDays.includes(index)}
                onChange={() => handleDayCheckboxChange(index)}
            />
            {day}
        </label>
        ))}
    </div>
    
        <label>Date:</label>
            <input className="input--date"
            type="date"
            value={eventData.eventDate[0] || ''}
            onChange={(e) => handleDateChange(e.target.value, '')}
            />
    </div>
    )}
            
            </section>
            <section className="card-info"> 
            <form onSubmit={handleSubmit}>
    <div>{/* TITLE INPUT */}
        <label>Title:</label>
        <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleInputChange}
            required
        />
    </div>
    <div>{/* DESCRIPTION INPUT */}
        <label>Description</label>
        <input
            type="text"
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
            required
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
    
    
    <button type="submit"  className="button--save" onClick={handleClose} >
              Create Event
              </button>
    </form>
              
                
            </section>
        </article>

        </Modal>

    </>
    
);
}

export default PopUp;
