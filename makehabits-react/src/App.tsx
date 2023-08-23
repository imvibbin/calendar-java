
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from '../pages/LoginPage'
import Landing from './pages/Landing'
import NavBar from './pages/NavBar'
import Layout from './components/Layout/Layout'
import NoCollisionLayout from './components/DraggableLib/TimeCells'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout.tsx";
import UserCredentialsPage from "./pages/UserCredentialsPage/UserCredentialsPage.tsx";
import { AnimatePresence } from "framer-motion";
import Test from "./pages/Test.tsx";

function App() {


  return (
    <>
    <NoCollisionLayout/>
{/*     <BrowserRouter>
    <Routes>
      <Route index element= {<Landing />}/>
      <Route path ="home"element= {<NavBar/>}/>
    </Routes>

    </BrowserRouter> */}
    </>
  );
}

export default App;
