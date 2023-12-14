// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login"; // Import the Login component
import AdminDashboard from "./Components/AdminDashboard";
import AccountManagement from "./Components/AccountManagement";
import ManageStudents from "./Components/ManageStudents";
import ManageCars from "./Components/ManageCars";
import SalesManagement from "./Components/ManageSales";
import SubscribeForm from "./Components/Subscribe";
import Boutique from "./Components/Boutique";
import Error from "./Components/error";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Admin" element={<AdminDashboard />} />
        <Route path="/Account" element={<AccountManagement />} />
        <Route path="/Students" element={<ManageStudents />} />
        <Route path="/Cars" element={<ManageCars />} />
        <Route path="/Sales" element={<SalesManagement />} />
        <Route path="/Subscribe" element={<SubscribeForm />} />
        <Route path="/Boutique" element={<Boutique />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
