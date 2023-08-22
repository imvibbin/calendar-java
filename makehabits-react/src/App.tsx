import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import UserCredentialsPage from "./pages/UserCredentialsPage/UseCredentialsPage.tsx";
import { AnimatePresence } from "framer-motion";
import Test from "./pages/Test.tsx";

function App() {
  return (
    <>
      <AnimatePresence>
        <Router>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/registration" element={<UserCredentialsPage />} />
            <Route path="/login" element={<UserCredentialsPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App;
