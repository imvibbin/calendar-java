import { ChangeEvent, FormEvent, useState } from "react";
import UserInterface from "../../models/UserInterface";
import { createUser } from "../../services/UserService";
import BackendErrorType from "../../enums/BackendErrorType";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CustomError from "../../models/CustomError";
import { motion } from "framer-motion";
import UserCredentialInput from "../UserCredentialInput/UserCredentialInput";

import "./RegisterCalendarForm.css";

const RegisterCalendarForm = () => {
  const userInitial = {
    user_id: 0,
    username: "",
    email: "",
    password: "",
  };

  const [newUser, setNewUser] = useState<UserInterface>(userInitial);
  const navigate = useNavigate();

  const notification = (loginSuccess: boolean, errorCode: number) => {
    const errorMessages: { [key: number]: string } = {
      1: "Success!",
      2: "This username is already used",
      3: "This email is already used",
      4: "Database Error",
    };

    const toastMessage = errorMessages[errorCode];

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
    setNewUser({ ...newUser, [name]: value });
  };

  const errorHandler = (error: unknown) => {
    const backendError = error as CustomError;
    if (backendError.message) {
      // Map the error message to MessageType enum value
      const errorType = backendError.message;

      if (errorType) {
        // Handle specific error cases
        switch (errorType) {
          case BackendErrorType.UsernameAlreadyExists:
            // Handle username already exists error
            // For example: display an error message to the user
            notification(false, 2);
            console.error("Username already exists.");
            break;
          case BackendErrorType.EmailAlreadyExists:
            // Handle email already exists error
            // For example: display an error message to the user
            notification(false, 3);
            console.error("Email already exists.");
            break;
          // Add cases for other error types as needed
          default:
            notification(false, 4);
            console.error("An error occurred:", backendError.message);
            break;
        }
      } else {
        console.error("An unknown error occurred.");
      }
    } else {
      console.error(
        "Failed to authenticate newUser: An unknown error occurred.",
      );
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await createUser(newUser);
      localStorage.setItem("USER_DATA", JSON.stringify(response));
      notification(true, 1);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <div className="main-container-form w-100 d-flex justify-content-center align-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-50 h-100 d-flex flex-column justify-content-center align-items-center"
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
            value={newUser.username}
            onChange={handleOnChange}
          />
          <UserCredentialInput
            className="mt-2"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            }
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
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
            value={newUser.password}
            onChange={handleOnChange}
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{
            color: "#FFFFFF",
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
          Register
        </motion.button>
      </form>
      <ToastContainer />
    </div>
  );
};
export default RegisterCalendarForm;
