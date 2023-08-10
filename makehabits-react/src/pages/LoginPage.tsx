import { ChangeEvent, FormEvent, useState } from "react";
import UserInterface from "../models/UserInterface";
import { createUser } from "../services/UserService";
import { Link } from "react-router-dom";

import "./styles/LoginPage.css";

const LoginPage = () => {
  const userInitial = {
    user_id: 0,
    username: "",
    password: "",
    rol_id: 0,
  };

  const [user, setUser] = useState<UserInterface>(userInitial);
  const [btnStatus, setBtnClicked] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setBtnClicked(!btnStatus);
    event.preventDefault();
    console.log(`Button status: ${btnStatus}`);
    console.log(user);
    createUser(user);
  };

  return (
    <>
      <div className="main-container container-fluid vh-100">
        <div className="row vh-100">
          <div className="main-container-banner col-7 d-flex align-items-center justify-content-center">
            <h1 className="align-items-center">1st</h1>
          </div>
          <div className="main-container-content col-5 d-flex align-items-center justify-content-center flex-column p-5">
            <div className="main-container-content-form">
              <h2>Welcome to Makehabits!</h2>
           
              <form onSubmit={handleSubmit} className="d-flex flex-column">
                <input
                  type="text"
                  id="username"
                  className="p-3 rounded-pill"
                  name="username"
                  placeholder="Email Address"
                  value={user.username}
                  onChange={handleOnChange}
                  required
                />
                <input
                  type="password"
                  id="password"
                  className="p-3 rounded-pill"
                  name="password"
                  placeholder="Passsword"
                  value={user.password}
                  onChange={handleOnChange}
                  required
                />
                 <div>
              <Link to="/login">Forgot password?</Link>
                        </div>
                <button
                  type="submit"
                  className={`p-3 rounded-pill mt-2 mb-2 ${
                    btnStatus ? "btn-triggered" : ""
                  }`}
                >
                  { btnStatus ? "Ok!" : "Login" }

               
            

                </button>
              </form>
              <div>
      <p style={{ display: 'inline-block', marginRight: '5px' }}>Not a member?</p>
      <p style={{ display: 'inline-block' }}>
        <Link to="/registration">Sign up Now</Link>
      </p>
    </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
