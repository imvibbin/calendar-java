import React from "react";

import gym from "../../assets/gym.png";
import work from "../../assets/work.png";
import study from "../../assets/study.png";
import cook from "../../assets/cook.png";
import calendar from "../../assets/calendar.png";
import cleaning from "../../assets/cleaning.png";

const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  // Handle the click event here
  alert("Hello world!");
};

function SideBarNavRight() {
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
    <>
      <header className="App-header">
        <p className="month">Agosto 2023</p>
        <ol>
          <li className="day-name">Lun</li>
          <li className="day-name">Mar</li>
          <li className="day-name">Mié</li>
          <li className="day-name">Jue</li>
          <li className="day-name">Vie</li>
          <li className="day-name">Sáb</li>
          <li className="day-name">Dom</li>

          <li className="first-day">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
        </ol>

        <br />

        <div className="container">
          <span>
            <h5> Activity List</h5>
          </span>
        </div>
        <br />
        <div className="container1">
          <button onClick={handleClick}>+ New Activity</button>
        </div>
        <br />
        <br />
        <div className="barra overflow-y-scroll  ">
          {eventsWithImages.map((event, index) => (
            <div key={index} className="container2">
              <span className="user-icon">
                <img src={event.imageUrl} alt="Course" />
              </span>

              {event.name}

              <div className=" btn-custom-btn">
                <ul>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 128 512"
                    fill="#A5B4CB"
                  >
                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                  </svg>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </header>
    </>
  );
}

export default SideBarNavRight;