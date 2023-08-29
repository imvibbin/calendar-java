/* import React from "react"; */
import study from "../../../assets/images/FrontPage/ActivitiesShowCase/study.png";
import user from "../../../assets/logo-user.png";
import UserInterface from "../../../models/UserInterface";
import { deleteActivity } from "../../../services/ActivityService";
import "./EventShowCase.scss";
import { useState } from "react";
import CustomError from "../../../models/CustomError";
import { ToastContainer, toast } from "react-toastify";

const notification = (deleteSuccess: boolean) => {
  const toastMessage = deleteSuccess ? "Success!" : "Cannot be deleted";

  toast[deleteSuccess ? "success" : "error"](toastMessage, {
    position: "top-center",
    autoClose: deleteSuccess ? 1000 : 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const EventShowCase = () => {
  const userData: UserInterface =
    JSON.parse(localStorage.getItem("USER_DATA") ?? "{}") || null;

  const [eventsData, setEventsData] = useState(
    Array.isArray(userData.activities)
      ? userData.activities.map((event) => {
          const activity = userData.activities[0];
          const [startHourStr, endHourStr] =
            activity.task_hour_range.split("|");
          return {
            id: event.task_id,
            name: event.task_name,
            timeLapse: `${startHourStr} - ${endHourStr}`,
            imageUser: user,
            imageUrl: study,
          };
        })
      : [],
  );

  const handleOnClick = async (eventId: number) => {
    try {
      await deleteActivity(eventId);
      notification(true);

      // Update the eventsData state variable
      setEventsData((prevState) => {
        const updatedEvents = prevState.filter((event) => event.id !== eventId);
        return updatedEvents;
      });

      // Update the USER_DATA item in the local storage
      const updatedUserData = { ...userData };
      updatedUserData.activities = updatedUserData.activities.filter(
        (event) => event.task_id !== eventId,
      );
      localStorage.setItem("USER_DATA", JSON.stringify(updatedUserData));
    } catch (error) {
      const backendError = error as CustomError; // Cast to custom error type
      if (backendError.message) {
        notification(false);
        console.error("Failed to authenticate user:", backendError.message);
      } else {
        console.error(
          "Failed to authenticate user: An unknown error occurred.",
        );
      }
    }
  };

  return (
    <div className="showcase-habit overflow-y-scroll  ">
      {eventsData.map((event, index) => (
        <div key={index} className="habit">
          <div className="habit__image">
            <img src={event.imageUrl} />
          </div>
          <div className="habit__info">
            <div className="info__title">{event.name}</div>
            <div className="info__image">
              <img src={event.imageUser} />
              <span>Home</span>
              {event.timeLapse}
            </div>
          </div>
          <div className="btn-custom-btn">
            <ul>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 -960 960 960"
                onClick={() => handleOnClick(event.id)}
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </ul>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default EventShowCase;
