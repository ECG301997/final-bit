import Home from './components/home/Home'
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const API = 'https://fakestoreapi.com'

    return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home API={API}/>}/>
          <Route path="/dashboard" element={<Dashboard API ={API}/>}/>
          </Routes>
      </BrowserRouter>
    )
}

export default App
