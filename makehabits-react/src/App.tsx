import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoCollisionLayout from "./components/Lib/DraggableLib/TimeCells.tsx";
import "./App.css";
import Layout from "./components/Layout/Layout.tsx";
import UserCredentialsPage from "./pages/UserCredentialsPage/UserCredentialsPage.tsx";
import { AnimatePresence } from "framer-motion";
import TimePickerLib from "./components/Lib/AntLib/TimePickerLib/TimePickerLib.tsx";
import UnderMask from "./components/Elements/UnderMask/UnderMask.tsx";
import CalendarPage from "./pages/CalendarPage/Calendar.tsx";
import Test from "./pages/Test.tsx";

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
            <Route path="/test" element={<NoCollisionLayout />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/time" element={<TimePickerLib />} />
            <Route path="/hola" element={<UnderMask />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App;
