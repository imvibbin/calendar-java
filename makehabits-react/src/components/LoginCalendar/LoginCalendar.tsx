import { useState } from "react";
import { motion } from "framer-motion";
import LoginCalendarForm from "../LoginCalendarForm/LoginCalendarForm";

import "./LoginCalendar.css";

const LoginCalendar = () => {
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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="main-container-content d-flex flex-column align-items-center justify-content-between"
      >
        <div className="calendar-top w-100 position-relative d-flex justify-content-center align-items-center">
          <div className="circle circle1 rounded-circle position-absolute"></div>
          <div className="circle circle2 rounded-circle position-absolute"></div>
          <div className="pill pill1 rounded-top-pill rounded-bottom-pill position-absolute"></div>
          <div className="pill pill2 rounded-top-pill rounded-bottom-pill position-absolute"></div>
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
        <LoginCalendarForm />
      </motion.div>
    </div>
  );
};

export default LoginCalendar;
