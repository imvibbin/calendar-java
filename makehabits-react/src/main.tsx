import React from "react";
import ReactDOM from "react-dom/client";
import "./Reset.css"
import "./App.css"
import "bootstrap/dist/css/bootstrap.css";
/* import  Landing from "./pages/Landing"; */
/* import  PopUp from "./components/PopUp/PopUp"; */

import './assets/fonts/Publio W01 Regular/Publio W01 Regular.ttf';
import HandleForm from "./components/HandleForm/HandleForm";
import Try from "./components/Try/Try";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Try/>
  </React.StrictMode>,
);
