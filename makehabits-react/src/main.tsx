import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
import "bootstrap/dist/css/bootstrap.css";
import  Landing from "./pages/Landing";
import './assets/fonts/Publio W01 Regular/Publio W01 Regular.ttf';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Landing/>
  </React.StrictMode>,
);
