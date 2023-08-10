import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SideBarNavRight from "./components/SideBarNavRight/SideBarNavRight";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="registration" element={<RegisterPage />} />
          <Route path="Login" element={<LoginPage />} />

          


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
