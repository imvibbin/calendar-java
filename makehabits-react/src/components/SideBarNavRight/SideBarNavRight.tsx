import perfil from "../../assets/perfil.png";

function SideBarNavRight() {

  

  return (
    <>
      <header className="App-header">
        <p className="user-text">
          User{" "}
          <span className="user-icon">
            <img src={perfil} alt="User" />
            

          </span>
        </p>
      </header>
  
    </>
  );
}

export default SideBarNavRight;
