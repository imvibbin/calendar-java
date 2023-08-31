import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Presentation from "./pages/Presentation/Presentation";
import App from "./App";

function AppWrapper() {
  const [showApp, setShowApp] = useState(true);

  const handleKeyPress = (event) => {
    if (event.key === "m") {
      setShowApp(!showApp);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [showApp]);

  return (
    <div>
      {showApp ? <App /> : <Presentation />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);


