import perfil from "../../assets/perfil.png";
import notificacion from "../../assets/notificacion.png"
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
      </header>
  
    </>
  );
}

export default SideBarNavRight;
