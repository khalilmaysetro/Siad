// src/components/SalesManagement.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const SalesManagement = () => {
  const [sales, setSales] = useState([]);
  const [newSale, setNewSale] = useState({ carModel: '', price: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSale((prevSale) => ({ ...prevSale, [name]: value }));
  };

  const handleAddSale = () => {
    setSales((prevSales) => [...prevSales, newSale]);
    setNewSale({ carModel: '', price: 0 });
  };

  return (
    
    <div className="flex h-screen">
        <Sidebar /><div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Car Sales Management</h1>

        <div className="mb-4">
            <input
            type="text"
            name="carModel"
            value={newSale.carModel}
            onChange={handleInputChange}
            placeholder="Car Model"
            className="p-2 mr-2 border rounded"
            />
            <input
            type="number"
            name="price"
            value={newSale.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="p-2 mr-2 border rounded"
            />
            <button
            onClick={handleAddSale}
            className="bg-blue-500 text-white p-2 rounded"
            >
            Add Sale
            </button>
        </div>

        <div>
            <h2 className="text-xl font-bold mb-2">Sales List</h2>
            <ul>
            {sales.map((sale, index) => (
                <li key={index} className="mb-2">
                {sale.carModel} - ${sale.price}
                </li>
            ))}
            </ul>
        </div>
        </div>
    </div>    
  );
};

export default SalesManagement;
