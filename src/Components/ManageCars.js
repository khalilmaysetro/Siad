
import React, { useState } from 'react';
import { Trash2, Edit , Plus,} from 'react-feather'; // Import Feather Icons
import Sidebar from './Sidebar';

const ManageCars = () => {
  // Sample student data (you can fetch this data from an API)
  const initialCars = [
    {
      id: 1,
      Brand: 'Mercedes',
      model : 'Class S',
      motorisation : 'Amg 220',
      Color: 'Black',
      image: 'student1.jpg', // Provide the image file path
    },
    {
        id: 2,
        Brand: 'BMW',
        model : 'Series 5',
        motorisation : 'M',
        Color: 'white',
        image: 'student1.jpg', // Provide the image file path
      },
      {
        id: 1,
      Brand: 'Mercedes',
      model : 'Class G',
      motorisation : 'Amg 63',
      Color: 'Black',
      image: 'student1.jpg', // Provide the image file path
      },
    // Add more car data as needed
  ];

  const [cars, setCar] = useState(initialCars);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingCar, setIsAddingCar] = useState(false); // State for the Add Student form/modal



  // Function to handle student deletion
  const handleDeleteCars = (carId) => {
    // Implement your logic to delete a student by ID
    // Update the 'students' state accordingly
  };

  const filteredCars = cars.filter((car) =>
    car.Brand.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  // Function to open the Add Student form/modal
  const openAddCarForm = () => {
    setIsAddingCar(true);
  };

  return (
    <div className="flex h-screen">
        <Sidebar />
        <div className="ml-6 w-3/4 p-4">
            <h2 className="text-xl font-semibold mb-8">Manage Cars</h2>
            
            <div className="flex mb-4 ">
                    {/* Search bar */}
                <div className="mb-4 w-3/4 mt-4">
                    <input
                    type="text"
                    placeholder="Search cars..."
                    className="border rounded py-2 px-3 w-full "
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {/* Add Student button */}
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4 "
                    onClick={openAddCarForm}
                >
                    <Plus size={16} className="mr-2 inline" />
                    Add Car
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCars.map((car) => (
                <div
                    key={car.id}
                    className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
                >
                    <img
                    src={car.image}
                    alt={car.name}
                    className="w-20 h-20 mx-auto rounded-full mb-2"
                    />
                    <p className="text-lg "> Brand : {car.Brand}</p>
                    <p className="text-lg "> Model : {car.model}</p>
                    <p className="text-lg "> Motorisation : {car.motorisation}</p>
                    <p className="text-lg "> Color : {car.Color}</p>
                    <div className="mt-4">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600"
                        onClick={() => {
                        // Implement your update student logic
                        }}
                    >
                        <Edit size={16} /> {/* Edit icon */}
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        onClick={() => {
                        handleDeleteCars(car.id);
                        }}
                    >
                        <Trash2 size={16} /> {/* Delete icon */}
                    </button>
                    </div>
                </div>
                ))}
            </div>
      </div>
    </div>
  );
};

export default ManageCars;
