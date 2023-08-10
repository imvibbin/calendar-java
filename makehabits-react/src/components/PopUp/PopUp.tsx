import Modal from 'react-bootstrap/Modal';
import './PopUp.css';
import { useState, ChangeEvent, } from 'react';
import Button from 'react-bootstrap/Button';

const PopUp = () => {
    const userInitial = {
        typeActivity:
    };

    const [show, setShow] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);

    const toggleDay = (day) => {
        if (selectedDays.includes(day)) {
          setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
        } else {
          setSelectedDays([...selectedDays, day]);

        }
      };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedOption, setSelectedOption] = useState('');
    /*  OPEN CLOSE MODAL */
    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };
    return (
    <>



      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
        </Button>
    
        <Modal show={show} onHide={handleClose}>

        <article className="card">
            <section className="card-time">
            {selectedOption === 'typeOfActivity1' && <div className="activity-event">
                
                    <span>23</span><span>feb</span>
                    <button> j </button>
                    <button> j </button>
                
            </div>}
            {selectedOption === 'typeOfActivity2' && <div className="activity-habit">
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

                </div>}

            
            </section>
            <section className="card-info"> 
                
                    <div><input className="input-title" placeholder='Activity/Event'/></div>
                    <div><input className="input-description" placeholder='Go run with my homies' /></div>
                    <div>
                        <label>
                            <input
                            type="radio"
                            value="typeOfActivity1"
                            checked={selectedOption === 'typeOfActivity1'}
                            onChange={handleOptionChange}
                            />
                            Event
                        </label>
                
                        <label>
                            <input
                            type="radio"
                            value="typeOfActivity2"
                            checked={selectedOption === 'typeOfActivity2'}
                            onChange={handleOptionChange}
                            />
                            Habit
                        </label>
                    </div>
                    <button className="button--save" onClick={handleClose}>
                    Save Activity
                    </button>
                
            </section>
        </article>

        </Modal>

    </>
    
);
}

export default PopUp;
