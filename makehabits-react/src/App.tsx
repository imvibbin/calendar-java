
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import Landing from './pages/Landing'
import NavBar from './pages/NavBar'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element= {<Landing />}/>
      <Route path ="home"element= {<NavBar/>}/>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
