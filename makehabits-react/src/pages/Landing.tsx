import "./Landing.css";
import logoUser from "../assets/logo-user.png";
import SideBarNavRight from "../components/SideBarNavRight/SideBarNavRight";
import Navbar from "../components/Navbar/Navbar";
const Landing = () => {
  return (
    <div className="container-fluid text-center text-light">
      <Navbar />
      <div className="row vh-100">
        <div style={{ backgroundColor: "pink" }} className="col-2 ">
          <div
            className={
              "d-flex justify-content-evenly align-items-center sidebar-card p-3"
            }
          >
            <div className={""}>
              <img className={"card-logo"} src={logoUser} alt="holi" />
            </div>
            <div className={""}>
              <div className={"card-title"}>Victor Jamet</div>
              <div className={"card-subtitle"}>Pro Member</div>
            </div>
          </div>
          <ul>
            <li className={"dashboard"}>
              <span>Dashboard</span>
            </li>
            <li className={"schedule"}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                  stroke="#0177FB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.50999"
                  stroke="#0177FB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Schedule</span>
            </li>
          </ul>
        </div>
        <div
          style={{ backgroundColor: "lightcoral" }}
          className="col-7 border border-white"
        >
          -
        </div>
        <div
          style={{ backgroundColor: "white" }}
          className="col-3 border border-white "
        >
          <div>
            <div className="perfil d-flex  ">
              <div className="notificacion d-flex "></div>

              <SideBarNavRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
