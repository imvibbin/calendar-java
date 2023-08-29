import { useState } from "react";
import { motion } from "framer-motion";
import RegisterCalendarForm from "../RegisterCalendarForm/RegisterCalendarForm";

import "./RegisterCalendar.scss";

const RegisterCalendar = () => {
  const calendarTitle = ["Build", "Your", "LiFe"];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      console.log(currentIndex);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < calendarTitle.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="w-50 h-100 d-flex align-items-center justify-content-center">
      <motion.div
        initial={{ y: 5000, opacity: 0, scale: 0.5 }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.8,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01],
            type: "spring",
            stiffness: 35,
          },
        }}
        className="main-container-content d-flex flex-column align-items-center justify-content-between"
      >
       
      
        <div className="calendar-top w-100 position-relative d-flex justify-content-center align-items-center">
         

          <div className="oval1 position-absolute">
          <svg width="51" height="55" viewBox="0 0 51 55" fill="none" xmlns="http://www.w3.org/2000/svg"> <ellipse cx="25.5" cy="27.5" rx="25.5" ry="27.5" fill="white"/> </svg>
          </div>
          <div className=" oval2 position-absolute">
          <svg width="51" height="55" viewBox="0 0 51 55" fill="none" xmlns="http://www.w3.org/2000/svg"> <ellipse cx="25.5" cy="27.5" rx="25.5" ry="27.5" fill="white"/> </svg>

          </div>
          <div className="lineStroke1 position-absolute">
          <svg width="37" height="105" viewBox="0 0 37 105" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M36 6V47.1111V90.9293C36 92.6385 35.127 94.2292 33.6852 95.1471L21.1852 103.105C19.547 104.148 17.453 104.148 15.8148 103.105L3.31481 95.1471C1.87303 94.2292 1 92.6385 1 90.9293V70.6667V47.1111V23.5556V6C1 3.23858 3.23858 1 6 1H18.5H31C33.7614 1 36 3.23858 36 6Z" fill="#FAA4BD" stroke="url(#paint0_linear_373_45)" stroke-width="2"/> <defs> <linearGradient id="paint0_linear_373_45" x1="18.5" y1="0" x2="18.5" y2="106" gradientUnits="userSpaceOnUse"> <stop stop-color="#FAA4BD"/> <stop offset="0.255208" stop-color="#533B42" stop-opacity="0"/> <stop offset="0.723958" stop-color="#533B4D" stop-opacity="0.3"/> </linearGradient> </defs> </svg>
          </div>
          <div className="lineStroke2 position-absolute">
          <svg width="37" height="105" viewBox="0 0 37 105" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M36 6V47.1111V90.9293C36 92.6385 35.127 94.2292 33.6852 95.1471L21.1852 103.105C19.547 104.148 17.453 104.148 15.8148 103.105L3.31481 95.1471C1.87303 94.2292 1 92.6385 1 90.9293V70.6667V47.1111V23.5556V6C1 3.23858 3.23858 1 6 1H18.5H31C33.7614 1 36 3.23858 36 6Z" fill="#FAA4BD" stroke="url(#paint0_linear_373_45)" stroke-width="2"/> <defs> <linearGradient id="paint0_linear_373_45" x1="18.5" y1="0" x2="18.5" y2="106" gradientUnits="userSpaceOnUse"> <stop stop-color="#FAA4BD"/> <stop offset="0.255208" stop-color="#533B42" stop-opacity="0"/> <stop offset="0.723958" stop-color="#533B4D" stop-opacity="0.3"/> </linearGradient> </defs> </svg>
          </div>
          
           
           <div className="calendar-title d-flex align-items-center justify-content-between rounded-pill d-none">
            <div
              className="calendar-arrows calendar-arrow-previous rounded-circle position-relative ms-4"
              onClick={handlePreviousClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                className="position-absolute"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </div>
            <div className="border calendar-title-content d-flex align-items-center justify-content-center overflow-hidden">
              {calendarTitle[currentIndex]}
            </div>
            <div
              className="calendar-arrows calendar-arrow-next rounded-circle position-relative me-4"
              onClick={handleNextClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                className="position-absolute"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </div>
          </div>
        </div>
        <RegisterCalendarForm />
      </motion.div>
    </div>
  );
};

export default RegisterCalendar;
