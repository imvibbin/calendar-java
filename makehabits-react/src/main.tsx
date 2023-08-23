import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
import "bootstrap/dist/css/bootstrap.css";

import './assets/fonts/Publio W01 Regular/Publio W01 Regular.ttf';
import App from "./App";

import Layout from "./components/Layout/Layout";
import WeeklyView from "./components/WeeklyView/WeeklyView";
import PopUpLib from "./components/AntLib/PopUpLib/PopUpLib";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
);



