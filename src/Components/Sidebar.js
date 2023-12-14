import React from 'react';
import {Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className="w-64 bg-gray-900  shadow-md">
        <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-300 mb-5">
                Admin Dashboard
            </h1>              
        </div>    
        <ul className="space-y-2 pl-2.5">
            <li className="mb-2">
              <Link to="/" className="text-gray-300 hover:text-blue-500">
                Home</Link> {/* Add this link */}
            </li>
            <li className="mb-2">
              <Link to="/Account" className="text-gray-300 hover:text-blue-500">
                Manage Account</Link> {/* Add this link */}
            </li>
            <li className="mb-2">
              <Link to="/Students" className="text-gray-300 hover:text-blue-500">
                Manage Clients </Link> {/* Add this link */}
            </li>
            <li className="mb-2">
              <Link to="/Cars" className="text-gray-300 hover:text-blue-500">
                Manage Cars </Link> {/* Add this link */}
            </li><li className="mb-2">
              <Link to="/Sales" className="text-gray-300 hover:text-blue-500">
                Sales </Link> {/* Add this link */}
            </li>
            <li className="mb-2">
              <Link to="/" className="text-gray-300 hover:text-blue-500">
                Prices Estimation </Link> {/* Add this link */}
            </li>
          </ul>
    </div>
  )
}

export default Sidebar