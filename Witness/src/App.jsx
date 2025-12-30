import { useState } from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Layout from "./Componants/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyPagination from "./Componants/Pagination";
import CrimeDeatails from "./Pages/CrimeDetails";
import ExploreCrimes from "./Pages/ExploreCrimes";
import UserDashboard from "./Pages/UserDashboard";
import MyReports from "./Pages/MyReports";
import AddEditCrime from "./Pages/AddEditCrime";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import MangeUsers from "./Pages/Admin/ManageUsers"
import UserFilter from "./Componants/UserFilter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="UserFilter" element={<UserFilter />} />
            <Route path="AddEditCrime" element={<AddEditCrime />} />
            <Route path="MyReports" element={<MyReports />} />
            <Route path="/UserDashBoard/:username"element={<UserDashboard />}/>
            <Route path="ExploreCrimes" element={<ExploreCrimes />} />
            <Route path="CrimeDetails/:id" element={<CrimeDeatails />} />
            <Route path="page" element={<MyPagination />} />
            <Route path="Home" element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Login />} />
          <Route path="AdminDashboard" element={<AdminDashboard />} />
          <Route path="ManageUsers" element={<MangeUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
