import { useState } from 'react'
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "login" element={<Login/>}/>
        <Route path = "register" element={<Register/>}/>
        <Route path = "*" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
