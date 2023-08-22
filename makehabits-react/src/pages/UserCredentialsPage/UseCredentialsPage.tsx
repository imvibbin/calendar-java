import { motion } from "framer-motion";
import LoginCalendar from "../../components/LoginCalendar/LoginCalendar";
import LoginTitle from "../../components/LoginTitle/LoginTitle";
import RegisterTitle from "../../components/RegisterTitle/RegisterTitle";
import RegisterCalendar from "../../components/RegisterCalendar/RegisterCalendar";
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
        {location.pathname === "/login" && (
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
