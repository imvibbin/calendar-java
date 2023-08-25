/* import React from "react"; */
import gym from "../../../assets/images/FrontPage/ActivitiesShowCase/gym.png";
import work from "../../../assets/images/FrontPage/ActivitiesShowCase/work.png";
import study from "../../../assets/images/FrontPage/ActivitiesShowCase/study.png";
import cook from "../../../assets/images/FrontPage/ActivitiesShowCase/cook.png";
import cleaning from "../../../assets/images/FrontPage/ActivitiesShowCase/cleaning.png";
import user from "../../../assets/logo-user.png";
import './EventShowCase.scss'



const durationActivity = '1:30';
function EventShowCase() {
  const eventsWithImages = [
    {
      name: "Cleaning",
      timeLapse: `TimeLapse ${durationActivity}`,
      imageUser: user,
      imageUrl: cleaning,
    },
    {
      name: "Gym",
      timeLapse: `TimeLapse ${durationActivity}`,
      imageUser: user,
      imageUrl: gym,
    },
    {
      name: "Work",
      timeLapse: `TimeLapse ${durationActivity}`,
      imageUser: user,
      imageUrl: work,
    },
    {
      name: "Study",
      timeLapse: `TimeLapse ${durationActivity}`,
      imageUser: user,
      imageUrl: study,
    },
    {
      name: "Work",
      timeLapse: `TimeLapse ${durationActivity}`,
      imageUser: user,
      imageUrl: work,
    },
    {
      name: "Cooking",
      timeLapse: `TimeLapse ${durationActivity}`,
      imageUser: user,
      imageUrl: cook,
    },
    {
      name: "Gym",
      timeLapse: `TimeLapse ${durationActivity}`,
      imageUser: user,
      imageUrl: gym,
    },
    {
      name: "Work",
      timeLapse: `TimeLapse ${durationActivity}`,
      imageUser: user,
      imageUrl: work,
    },
    {
      name: "Study",
      timeLapse: `TimeLapse ${durationActivity}`,
      imageUser: user,
      imageUrl: study,
    },

  ];

  return (
    <div className="showcase-habit overflow-y-scroll  ">
      {eventsWithImages.map((event, index) => (
        <div key={index} className="habit">
          <div className="habit__image">
            <img src={event.imageUrl}/>
          </div>
          <div className="habit__info">
            <div className="info__title">
              {event.name}
            </div>
            <div className="info__image">
              <img src={event.imageUser}/>
            <span>Home</span>
            {event.timeLapse}

            </div>
          </div>
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