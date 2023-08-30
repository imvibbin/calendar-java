import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoCollisionLayout from "./components/Lib/DraggableLib/TimeCells.tsx";
import "./App.css";
import Layout from "./pages/Layout/Layout.tsx";
import UserCredentialsPage from "./pages/UserCredentialsPage/UserCredentialsPage.tsx";
import { AnimatePresence } from "framer-motion";
import TimePickerLib from "./components/Lib/AntLib/TimePickerLib/TimePickerLib.tsx";
import AnotherVersion from "./components/Lib/AntLib/AnotherVersion/AnotherVersion.tsx";
function App() {
  return (
    <>
      <AnimatePresence>
        <Router>
          <Routes>
            <Route index element={<UserCredentialsPage />} />
            <Route path="/calendar" element={<Layout />} />
            <Route path="/login" element={<UserCredentialsPage />} />
            <Route path="/registration" element={<UserCredentialsPage />} />
            <Route path="/login" element={<UserCredentialsPage />} />
            <Route path="/test" element={<NoCollisionLayout />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/time" element={<TimePickerLib />} />
            <Route path="/Another" element={<AnotherVersion />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App;
