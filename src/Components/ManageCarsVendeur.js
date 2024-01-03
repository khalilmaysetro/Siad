// ManageCarsVendeur.js
import React, { useState } from 'react';
import { Plus, Trash2, Edit } from 'react-feather';
import SidebarVendeur from './SidebarVendeur';

const ManageCarsVendeur = () => {
  const [cars, setCars] = useState([
    { id: 2, marque: 'BMW', couleur: 'White', moteur: 'M', prix: 60000 },

  ]);

  const handleDeleteCar = (carId) => {

  };

  return (
    <div className="flex h-screen bg-green-100">
      <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
        <SidebarVendeur />
      </div>

      {/* Main content area */}
      <div className="flex-grow p-8">
	
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Manage Cars</h2>
	

        {/* Cars table */}
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full bg-white border rounded-lg shadow-lg border-collapse">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="px-6 py-4">Car Model</th>
                <th className="px-6 py-4">Color</th>
                <th className="px-6 py-4">Engine</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {cars.map((car) => (
                <tr key={car.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{car.marque}</td>
                  <td className="px-6 py-4">{car.couleur}</td>
                  <td className="px-6 py-4">{car.moteur}</td>
                  <td className="px-6 py-4">${car.prix.toLocaleString()}</td>
                  <td className="px-6 py-4 flex items-center justify-center space-x-2">

		    <button
                      className="bg-red-500 text-white py-1 px-3 rounded-full transition duration-300 transform hover:scale-110"
                      onClick={() => handleDeleteCar(car.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                    <button
                      className="bg-green-500 text-white py-1 px-3 rounded-full transition duration-300 transform hover:scale-110"
                    >
                      <Edit size={18} />
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

export default ManageCarsVendeur;
