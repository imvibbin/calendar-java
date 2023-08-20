import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import LoginCalendar from "../../components/LoginCalendar/LoginCalendar";
import LoginTitle from "../../components/LoginTitle/LoginTitle";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

const LoginPage = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const notification = () => {
    const toastMessage = loginSuccess
      ? "Success!"
      : "Username or password incorrect";

    toast.success(toastMessage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <motion.div
        initial={{}}
        animate={{}}
        exit={{}}
        className="main-container vh-100 d-flex align-items-center justify-content-between p-5"
      >
        <button onClick={notification}>test</button>
        <LoginTitle />
        <LoginCalendar />
        <ToastContainer />
      </motion.div>
    </>
  );
};

export default LoginPage;
