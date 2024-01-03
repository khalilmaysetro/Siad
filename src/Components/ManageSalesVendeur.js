// SalesManagementVendeur.js
import React, { useState } from 'react';
import { Trash2, Edit } from 'react-feather';
import SidebarVendeur from './SidebarVendeur';

const SalesManagementVendeur = () => {
  const [sales, setSales] = useState([
    { id: 2, marque: 'BMW', client: 'John Cena', vendeur: 'Salesman2', dateAchat: '2023-02-01', prix: 60000 },

  ]);

  return (
    <div className="flex h-screen bg-green-100">
      <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
	<SidebarVendeur />
      </div>


      <div className="flex-grow p-8">

        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Sales Management</h2>

        {/* Sales table */}
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full bg-white border rounded-lg shadow-lg border-collapse">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-6 py-4">Car Model</th>
                <th className="px-6 py-4">Client Name</th>
                <th className="px-6 py-4">Salesman</th>
                <th className="px-6 py-4">Purchase Date</th>
                <th className="px-6 py-4">Price</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {sales.map((sale) => (
                <tr key={sale.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{sale.marque}</td>
                  <td className="px-6 py-4">{sale.client}</td>
                  <td className="px-6 py-4">{sale.vendeur}</td>
                  <td className="px-6 py-4">{sale.dateAchat}</td>
                  <td className="px-6 py-4">${sale.prix.toLocaleString()}</td>                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesManagementVendeur;
