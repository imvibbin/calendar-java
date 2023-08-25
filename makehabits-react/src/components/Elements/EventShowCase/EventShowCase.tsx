import React from "react";
import gym from "../../../assets/images/FrontPage/ActivitiesShowCase/gym.png";
import work from "../../../assets/images/FrontPage/ActivitiesShowCase/work.png";
import study from "../../../assets/images/FrontPage/ActivitiesShowCase/study.png";
import cook from "../../../assets/images/FrontPage/ActivitiesShowCase/cook.png";
import cleaning from "../../../assets/images/FrontPage/ActivitiesShowCase/cleaning.png";
import './EventShowCase.scss'

const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  // Handle the click event here
  alert("Hello world!");
};

function EventShowCase() {
  const eventsWithImages = [
    {
      name: "Cleaning Home",
      imageUrl: cleaning,
    },
    {
      name: "Gym",
      imageUrl: gym,
    },
    {
      name: "work",
      imageUrl: work,
    },
    {
      name: "Study",
      imageUrl: study,
    },
    {
      name: "work",
      imageUrl: work,
    },
    {
      name: "Cooking",
      imageUrl: cook,
    },
    {
      name: "Gym",
      imageUrl: gym,
    },
    {
      name: "work",
      imageUrl: work,
    },
    {
      name: "Study",
      imageUrl: study,
    },
    {
      name: "work",
      imageUrl: work,
    },
  ];

  return (
    <div className="showcase-habit overflow-y-scroll  ">
      {eventsWithImages.map((event, index) => (
        <div key={index} className="habit">
          <span className="user-icon">
            <img src={event.imageUrl} alt="Course" />
          </span>

          {event.name}

          <div className=" btn-custom-btn">
            <ul>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512" fill="#A5B4CB" > <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" /> </svg>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventShowCase;