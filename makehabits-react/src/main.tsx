import React from "react";
import ReactDOM from "react-dom/client";
import UserRegistration from "./components/UserRegistration";
import "bootstrap/dist/css/bootstrap.css";
import  Landing from "./pages/Landing";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
);
