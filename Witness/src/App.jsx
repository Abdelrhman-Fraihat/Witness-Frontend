import { useState } from 'react'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Home from "./Pages/Home"
import Layout from "./Componants/Layout"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "Home" element={<Home/>}/>
        <Route path = "Layout" element={<Layout/>}/>
        <Route path = "login" element={<Login/>}/>
        <Route path = "register" element={<Register/>}/>
        <Route path = "*" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
