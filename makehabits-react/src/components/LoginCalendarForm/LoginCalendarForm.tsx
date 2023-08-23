import { ChangeEvent, FormEvent, useState } from "react";
import UserInterface from "../../models/UserInterface";
import { loginUser } from "../../services/UserService";
import CustomError from "../../models/CustomError";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UserCredentialInput from "../UserCredentialInput/UserCredentialInput";
import { motion } from "framer-motion";

import "./LoginCalendarForm.css";

const LoginCalendarForm = () => {
  const userInitial = {
    user_id: 0,
    username: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState<UserInterface>(userInitial);
  const navigate = useNavigate();

  const notification = (loginSuccess: boolean) => {
    const toastMessage = loginSuccess
      ? "Success!"
      : "Username or password incorrect";

    toast[loginSuccess ? "success" : "error"](toastMessage, {
      position: "top-center",
      autoClose: loginSuccess ? 1000 : 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await loginUser(user.username, user.password);
      localStorage.setItem("USER_DATA", JSON.stringify(response));
      notification(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      const backendError = error as CustomError; // Cast to custom error type
      if (backendError.message) {
        notification(false);
        console.error("Failed to authenticate user:", backendError.message);
      } else {
        console.error(
          "Failed to authenticate user: An unknown error occurred.",
        );
      }
    }
  };

  return (
    <div className="main-container-form w-100 d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-50 h-100 d-flex flex-column justify-content-between align-items-center"
      >
        <div className="inputs w-100">
          <UserCredentialInput
            className="mt-2"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            }
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleOnChange}
          />
          <UserCredentialInput
            className="mt-2"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>
            }
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleOnChange}
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{
            color: "white",
            scale: 1.1,
            transition: {
              duration: 0.5,
              type: "spring",
              stiffness: 500,
            },
          }}
          whileTap={{ scale: 0.9 }}
          className="rounded-pill mt-3 mb-2 w-100"
        >
          Login
        </motion.button>

        <div className="links w-100 d-flex flex-column justify-content-center">
          <div className="forgot-pass text-center">Forgot password</div>
          <div className="create-acc text-center mt-3">
            Don't have an account yet?{" "}
            <span>
              <Link to="/registration">Create account</Link>
            </span>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default LoginCalendarForm;
