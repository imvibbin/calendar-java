import "./Landing.css";
import logoUser from "../assets/logo-user.png";
import SideBarNavRight from "../components/SideBarNavRight/SideBarNavRight";
const Landing = () => {
  return (
    <div className="container-fluid text-center text-light">
      <div className="row vh-100">
        <div style={{ backgroundColor: "pink" }} className="col-2 ">
          <div
            style={{ backgroundColor: "pink" }}
            className="col-12 p-3 d-flex flex-row justify-content-between align-items-around sidebar-card"
          >
            <div
              className={
                "d-flex landing landing-logo justify-content-center align-items-center "
              }
            >
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="1" width="22" height="22" rx="4" fill="#BFABCB" />
                <path
                  d="M0 5C0 2.79086 1.79086 1 4 1H18C20.2091 1 22 2.79086 22 5V9H0V5Z"
                  fill="#8D89A6"
                />
                <g clipPath="url(#clip0_15_81)">
                  <path
                    d="M8.50888 20.1679C7.75928 20.1146 7.3674 19.8444 7.16613 19.5445C7.20471 18.8145 7.31648 17.9053 7.63059 17.0801C7.81067 16.6076 8.06623 16.1799 8.37973 15.8654C8.7225 15.4906 9.03923 15.2022 9.35835 14.9644C9.98826 14.4979 10.5409 14.2946 10.7157 14.2231C10.8926 14.1549 11.2098 14.0266 11.5936 13.8838C11.9762 13.7528 12.4396 13.5632 12.8351 13.3314C13.646 12.888 14.3181 12.3876 14.3171 12.3874C14.3184 12.3876 13.5998 12.7859 12.7648 13.1165C12.3435 13.2961 11.913 13.4142 11.5112 13.5072C11.1159 13.6088 10.7819 13.7124 10.598 13.7835C10.2542 13.9271 8.19401 14.5863 7.14173 16.7961C6.90371 17.3606 6.75443 17.9444 6.65775 18.4915C6.41988 18.3573 6.12376 18.0974 6.0431 17.6165C5.90251 16.7787 5.98074 14.2644 8.25912 12.8678C10.5377 11.4713 13.0815 11.7504 14.2989 11.3408C15.5162 10.9312 16 10 16 10C16 10 14.9855 19.4788 8.50888 20.1679Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M7.6 4.5V6.01H7.885V4.5H8.36V8H7.885V6.475H7.6V8H7.125V4.965H7.05L7.1 4.5H7.6ZM8.98496 8H8.50996L8.77996 4.965H8.68996L8.73996 4.5H9.65496L9.96496 8H9.48996L9.43496 7.4H9.03996L8.98496 8ZM9.07996 6.935H9.39496L9.23996 5.195L9.07996 6.935ZM10.1127 8.035V4.965H10.0377L10.0877 4.5H10.8777C11.0177 4.5 11.131 4.54333 11.2177 4.63C11.3044 4.71333 11.3477 4.825 11.3477 4.965V6.015C11.3477 6.06167 11.341 6.10667 11.3277 6.15C11.4077 6.23667 11.4477 6.34667 11.4477 6.48V7.57C11.4477 7.71 11.3944 7.82333 11.2877 7.91C11.1844 7.99333 11.0627 8.035 10.9227 8.035H10.1127ZM10.8477 4.965H10.5877V6.015H10.8477C10.8644 6.015 10.8727 6.00667 10.8727 5.99V4.99C10.8727 4.97333 10.8644 4.965 10.8477 4.965ZM10.9477 6.48H10.5877V7.57H10.9477C10.9644 7.57 10.9727 7.56167 10.9727 7.545V6.505C10.9727 6.48833 10.9644 6.48 10.9477 6.48ZM11.6709 8V4.965H11.5959L11.6459 4.5H12.1459V8H11.6709ZM12.2953 4.965V4.5H13.6703V4.965H13.2203V8H12.7453V4.965H12.2953ZM14.2986 7V7.53C14.2986 7.54667 14.307 7.555 14.3236 7.555H14.5236C14.5403 7.555 14.5486 7.54667 14.5486 7.53V6.63L14.1536 6.455C14.1236 6.445 14.082 6.42833 14.0286 6.405C13.9753 6.37833 13.927 6.34 13.8836 6.29C13.8436 6.24 13.8236 6.17167 13.8236 6.085V4.945C13.8236 4.805 13.867 4.69333 13.9536 4.61C14.0403 4.52333 14.1536 4.48 14.2936 4.48H14.5536C14.6936 4.48 14.807 4.52333 14.8936 4.61C14.9803 4.69333 15.0236 4.805 15.0236 4.945V5.685L14.5486 5.645V4.97C14.5486 4.95333 14.5403 4.945 14.5236 4.945H14.3236C14.307 4.945 14.2986 4.95333 14.2986 4.97V6.015L14.6936 6.19C14.7236 6.20333 14.7653 6.22167 14.8186 6.245C14.872 6.26833 14.9186 6.305 14.9586 6.355C15.002 6.405 15.0236 6.47333 15.0236 6.56V7.555C15.0236 7.695 14.9803 7.80833 14.8936 7.895C14.807 7.97833 14.6936 8.02 14.5536 8.02H14.2936C14.1536 8.02 14.0403 7.97833 13.9536 7.895C13.867 7.80833 13.8236 7.695 13.8236 7.555V7H14.2986Z"
                  fill="white"
                />
                <circle cx="4.5" cy="3.5" r="1.5" fill="white" />
                <circle cx="18.5" cy="3.5" r="1.5" fill="white" />
                <path
                  d="M3.5 1C3.5 0.447715 3.94772 0 4.5 0C5.05228 0 5.5 0.447715 5.5 1V2V3.38197C5.5 3.76074 5.286 4.107 4.94721 4.27639C4.66569 4.41716 4.33431 4.41716 4.05279 4.27639C3.714 4.107 3.5 3.76074 3.5 3.38197V3V2V1Z"
                  fill="#F2D5F8"
                />
                <path
                  d="M3.5 1C3.5 0.447715 3.94772 0 4.5 0C5.05228 0 5.5 0.447715 5.5 1V2V3.38197C5.5 3.76074 5.286 4.107 4.94721 4.27639C4.66569 4.41716 4.33431 4.41716 4.05279 4.27639C3.714 4.107 3.5 3.76074 3.5 3.38197V3V2V1Z"
                  stroke="black"
                />
                <path
                  d="M17.5 1C17.5 0.447715 17.9477 0 18.5 0C19.0523 0 19.5 0.447715 19.5 1V2V3.38197C19.5 3.76074 19.286 4.107 18.9472 4.27639C18.6657 4.41716 18.3343 4.41716 18.0528 4.27639C17.714 4.107 17.5 3.76074 17.5 3.38197V3V2V1Z"
                  fill="#F2D5F8"
                />
                <path
                  d="M17.5 1C17.5 0.447715 17.9477 0 18.5 0C19.0523 0 19.5 0.447715 19.5 1V2V3.38197C19.5 3.76074 19.286 4.107 18.9472 4.27639C18.6657 4.41716 18.3343 4.41716 18.0528 4.27639C17.714 4.107 17.5 3.76074 17.5 3.38197V3V2V1Z"
                  stroke="black"
                />
                <defs>
                  <clipPath id="clip0_15_81">
                    <rect
                      width="10"
                      height="10.1679"
                      fill="white"
                      transform="translate(6 10)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={"landing-title"}>Make Habits</div>
          </div>
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
