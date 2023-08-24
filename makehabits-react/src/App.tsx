import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout.tsx";
import UserCredentialsPage from "./pages/UserCredentialsPage/UserCredentialsPage.tsx";
import { AnimatePresence } from "framer-motion";
import CalendarPage from "./pages/CalendarPage/Calendar.tsx";

function App() {
  return (
    <>
      <AnimatePresence>
        <Router>
          <Routes>
            <Route index element={<Layout />} />
            <Route path="/registration" element={<UserCredentialsPage />} />
            <Route path="/login" element={<UserCredentialsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App;
