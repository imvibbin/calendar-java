import { ChangeEvent, FormEvent, useState } from "react";
import UserInterface from "../models/UserInterface";
import { loginUser } from "../services/UserService";
import CustomError from "../models/CustomError";
import { useNavigate } from "react-router-dom";

import "./styles/Users.css";

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
      const response = await loginUser(user.username, user.password);
      localStorage.setItem("USER_DATA", JSON.stringify(response));
      console.log("User logged:", response);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error: any) {
      const backendError = error as CustomError; // Cast to custom error type
      if (backendError.message) {
        console.error("Failed to authenticate user:", backendError.message);
      } else {
        console.error(
          "Failed to authenticate user: An unknown error occurred.",
        );
      }
    }
  };

  return (
    <>
      <div className="main-container d-flex border align-items-center justify-content-end p-5 vh-100">
        <div className="main-container-content-form d-flex flex-column h-100 align-items-center justify-content-center">
          <div className="w-100 ">
            <h2>Welcome to Makehabits!</h2>
            <p>Please enter your username and password</p>
          </div>
          <form onSubmit={handleSubmit} className="w-100">
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="username-icon p-3 border rounded-start-pill d-flex text-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
              <input
                type="text"
                id="username"
                className="p-3 rounded-end-pill w-100"
                name="username"
                placeholder="Username"
                value={user.username}
                onChange={handleOnChange}
                required
              />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>

              <input
                type="password"
                id="password"
                className="p-3 rounded-end-pill"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleOnChange}
                required
              />
            </div>
            <button
              type="submit"
              className={`p-3 rounded-pill mt-4 mb-2 w-100 ${
                btnStatus ? "btn-triggered" : ""
              }`}
            >
              {btnStatus ? "Ok!" : "Login"}
            </button>
            <div className="">
              <p className="forgot-pass text-center">Forgot password</p>
              <p className="create-acc mt-4 text-center">
                Don't have an account yet? <span>Create account</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
