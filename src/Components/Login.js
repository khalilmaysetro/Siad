// src/components/Login.js

import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Link } from 'react-router-dom';



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login, e.g., store authentication token
        console.log("Login successful");
      } else {
        // Handle login error
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div > 
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-4">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input mt-2 rounded-md w-full py-2 px-3 border"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input mt-2 rounded-md w-full py-2 px-3 border"
                placeholder="Your Password"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out"
            >
              Login
            </button>
          </form>
          <p className="mt-8">
            If you don't have an accout please <Link to="/Subscribe" className="text-blue-500 hover:underline"> Subscribe here </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
