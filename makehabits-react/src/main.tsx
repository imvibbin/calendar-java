import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
import "bootstrap/dist/css/bootstrap.css";
/* import  Landing from "./pages/Landing"; */
/* import  PopUp from "./components/PopUp/PopUp"; */

import './assets/fonts/Publio W01 Regular/Publio W01 Regular.ttf';
import HandleForm from "./components/HandleForm/HandleForm";
import Try from "./components/Try/Try";
import PopUp from "./components/PopUp/PopUp";
import HourRangeInput from "./components/HourRangeInput/HourRangeInput";
import Landing from "./pages/Landing";
import Layout from "./components/Layout/Layout";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CalendarGrid/>
  </React.StrictMode>,
);
