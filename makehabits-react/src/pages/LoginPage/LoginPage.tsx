import LoginCalendar from "../../components/LoginCalendar/LoginCalendar";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="main-container vh-100 d-flex align-items-center justify-content-end p-5">
        <LoginCalendar />
      </div>
    </>
  );
};

export default LoginPage;
