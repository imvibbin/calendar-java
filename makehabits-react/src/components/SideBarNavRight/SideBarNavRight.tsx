import React from "react";
import perfil from "../../assets/perfil.png";
import notificacion from "../../assets/notificacion.png";
import app from "../../assets/app.png";
import gym from "../../assets/gym.png";
import user1 from "../../assets/user1.png";

const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  // Handle the click event here
  alert("Hello world!");
};

function SideBarNavRight() {
  return (
    <>
      <header className="App-header">
        <p className="user-text">
          <span className="notification">
            <img src={notificacion} alt="notificaciones" />
          </span>

          <span className="user-icon ">
            <img src={perfil} alt="User" />
            User{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 512 512"
              fill="#A5B4CB"
            >
              <svg width="100" height="100" style={{ fill: "#A5B4CB" }}></svg>
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </span>
        </p>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container">
          <span>List Activity</span>
        </div>
        <br />
        <div className="container1">
          <button onClick={handleClick}>+ New Activity</button>
        </div>
        <br />
        <br />
        <div className="container">
          <span className="user-icon ">
            <img src={app} alt="Course" />
          </span>
          App Devlopmwnt Course {""}
          <div className="btn custom-btn ">
            <ul>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 128 512"
                fill="#A5B4CB"
              >
                <svg width="100" height="100" style={{ fill: "#A5B4CB" }}></svg>
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
              </svg>
            </ul>
          </div>
        </div>

        <div className="container">
          <span className="user-icon ">
            <img src={gym} alt="gym" />
          </span>
          Gym - It's gym time {""}
        </div>
        <div className="user1">
          <img src={user1} alt="user1" />
        </div>
      </header>
    </>
  );
}

export default SideBarNavRight;
