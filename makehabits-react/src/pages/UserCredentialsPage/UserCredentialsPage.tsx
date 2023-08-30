import { motion } from "framer-motion";
import LoginTitle from "../../components/UserCredentials/Login/LoginTitle/LoginTitle";
import LoginCalendar from "../../components/UserCredentials/Login/LoginCalendar/LoginCalendar";
import RegisterTitle from "../../components/UserCredentials/Register/RegisterTitle/RegisterTitle";
import RegisterCalendar from "../../components/UserCredentials/Register/RegisterCalendar/RegisterCalendar";
import "react-toastify/dist/ReactToastify.css";
import "./UserCredentialsPage.css";
import { useLocation } from "react-router-dom";

const UserCredentialsPage = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <motion.div
        initial={{}}
        animate={{}}
        exit={{}}
        className="main-container vh-100 d-flex align-items-center justify-content-between p-5 overflow-hidden"
      >
        {location.pathname === "/registration" && (
          <>
            <RegisterTitle />
            <RegisterCalendar />
          </>
        )}
        {(location.pathname === "/login" || location.pathname === "/") && (
          <>
            <LoginTitle />
            <LoginCalendar />
          </>
        )}
      </motion.div>
    </>
  );
};

export default UserCredentialsPage;
