// AccountManagement.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const AccountManagement = () => {
  const [user, setUser] = useState({
    username: 'exampleUser',
    email: 'user@example.com',
    password: '',
    newPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your account management logic here, such as updating passwords or user information.
    // You can use API calls or any other methods based on your backend architecture.
    // Example:
    // if (user.newPassword !== '') {
    //   // Call an API to update the password
    //   console.log('Password updated successfully');
    // }
    // if (user.email !== '') {
    //   // Call an API to update the email
    //   console.log('Email updated successfully');
    // }
    // You should handle error cases and success messages as per your requirements.
  };

  return (
    <div className="flex h-screen">
        <Sidebar />
        <div className="w-3/4 p-4">
            <h2 className="text-xl font-semibold mb-8">Manage Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        className="w-full border rounded py-2 px-3"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full border rounded py-2 px-3"
                    />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700">New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        value={user.newPassword}
                        onChange={handleChange}
                        className="w-full border rounded py-2 px-3"
                    />
                </div>
                <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                Update Account
                </button>
            </form>
      </div>
    </div>
  );
};

export default AccountManagement;
