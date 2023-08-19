import { ChangeEvent, FormEvent, useState } from "react";
import UserInterface from "../../models/UserInterface";
import { createUser } from "../../services/UserService";
import CustomError from "../../models/CustomError";
import { useNavigate } from "react-router-dom";

import "./RegisterPage.css";

const RegisterPage = () => {
  const userInitial = {
    user_id: 0,
    username: "",
    password: "",
    rol_id: 0,
  };

  const [user, setUser] = useState<UserInterface>(userInitial);
  const [btnStatus, setBtnClicked] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setBtnClicked(true);
    event.preventDefault();
    console.log(`Button status: ${btnStatus}`);
    console.log(user);
    try {
      const response = await createUser(user);
      localStorage.setItem("USER_DATA", JSON.stringify(response));
      console.log("User created:", response);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error: any) {
      const backendError = error as CustomError; // Cast to custom error type
      if (backendError.message) {
        console.error("Failed to create user:", backendError.message);
      } else {
        console.error("Failed to create user: An unknown error occurred.");
      }
    }
  };

  return (
    <>
      <div className="main-container container-fluid vh-100">
        <div className="row h-auto vh-100 overflow-hidden">
          <div className="main-container-banner col-md-7 d-flex align-items-center justify-content-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0099ff"
                fillOpacity="1"
                d="M0,224L30,213.3C60,203,120,181,180,192C240,203,300,245,360,240C420,235,480,181,540,138.7C600,96,660,64,720,69.3C780,75,840,117,900,149.3C960,181,1020,203,1080,192C1140,181,1200,139,1260,117.3C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="main-container-content col-5 p-5 position-relative">
            <div className="main-container-content-form position-absolute">
              <h2>Welcome to Makehabits!</h2>
              <form onSubmit={handleSubmit} className="d-flex flex-column">
                <input
                  type="text"
                  id="username"
                  className="p-3 rounded-pill"
                  name="username"
                  placeholder="Username"
                  value={user.username}
                  onChange={handleOnChange}
                  required
                />
                <input
                  type="password"
                  id="password"
                  className="p-3 rounded-pill"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleOnChange}
                  required
                />
                <button
                  type="submit"
                  className={`p-3 rounded-pill mt-2 mb-2 ${
                    btnStatus ? "btn-triggered" : ""
                  }`}
                >
                  {btnStatus ? "Ok!" : "Register"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
