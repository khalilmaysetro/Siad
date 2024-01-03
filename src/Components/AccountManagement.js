// AccountManagement.js
import React, { useState } from 'react';
import { Trash2, Edit } from 'react-feather';
import Sidebar from './Sidebar';

const AccountManagement = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, username: 'utilisateur1', name: 'John Doe', accountType: 'Client' },
    { id: 2, username: 'utilisateur2', name: 'Jane Doe', accountType: 'Vendeur' },
    // Add more account data as needed
  ]);

  const handleBlockAccount = (accountId) => {
    // Implement your logic to block an account by ID
    // Update the 'accounts' state accordingly
  };

  const handleEditAccount = (accountId) => {
    // Implement your logic to edit an account by ID
    // You can open a modal or navigate to an edit page
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-grow p-8">
        {/* Your main content goes here */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Account Management</h2>

        {/* Improved Account table */}
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full bg-white border rounded-lg shadow-lg border-collapse">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-6 py-4">Username</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Account Type</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {accounts.map((account) => (
                <tr key={account.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{account.username}</td>
                  <td className="px-6 py-4">{account.name}</td>
                  <td className="px-6 py-4">{account.accountType}</td>
                  <td className="px-6 py-4 flex items-center justify-center space-x-2">
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded-full transition duration-300 transform hover:scale-110"
                      onClick={() => handleBlockAccount(account.id)}
                    >
                      <Trash2 size={20} />
                    </button>
                    <button
                      className="bg-green-500 text-white py-1 px-3 rounded-full transition duration-300 transform hover:scale-110"
                      onClick={() => handleEditAccount(account.id)}
                    >
                      <Edit size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
