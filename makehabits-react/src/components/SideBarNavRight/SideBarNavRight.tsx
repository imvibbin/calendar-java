import React from 'react'
import perfil from "../../assets/perfil.png";
import notificacion from "../../assets/notificacion.png"
const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    // Handle the click event here 
    alert("Hello world!");
  };

function SideBarNavRight() {

  return (
    <>
      <header className="App-header">
        <p className="user-text">
          User{" "}
          <span className="user-icon ">
            <img src={perfil} alt="User" />
          </span>
          <span className="notificacion-icon">
       <img src={notificacion} alt="notificaciones" />
          </span>
        </p>
        <span>List Activity</span>
        <br />
        <button onClick={handleClick} >+ New Activity</button>
      </header>
  
    </>
  );
}

export default SideBarNavRight;