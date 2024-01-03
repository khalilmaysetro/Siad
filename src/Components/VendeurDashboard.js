// VendeurDashboard.js
import React from 'react';
import Sidebar from './SidebarVendeur';
import AvatarPlaceholder from './AvatarPlaceholder'; // Import the AvatarPlaceholder component

const VendeurDashboard = () => {
  return (
    <div className="flex">
      <div style={{display: 'grid', gridTemplateColumns: '250px auto'}}>
        <Sidebar />
      </div>

      <div className="flex-grow p-8 ml-64">
        <h1 className="text-3xl font-bold mb-4">Bienvenue au dashboard Vendeur</h1>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default VendeurDashboard;
