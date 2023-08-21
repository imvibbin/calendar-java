import { motion } from "framer-motion";
import LoginCalendar from "../../components/LoginCalendar/LoginCalendar";
import LoginTitle from "../../components/LoginTitle/LoginTitle";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <motion.div
        initial={{}}
        animate={{}}
        exit={{}}
        className="main-container vh-100 d-flex align-items-center justify-content-between p-5 overflow-hidden"
      >
        <LoginTitle />
        <LoginCalendar />
      </motion.div>
    </>
  );
};

export default LoginPage;
