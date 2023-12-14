// ManageStudent.js
import React, { useState } from 'react';
import { Trash2, Edit , Plus} from 'react-feather'; // Import Feather Icons
import Sidebar from './Sidebar';

const ManageStudents = () => {
  // Sample student data (you can fetch this data from an API)
  const initialStudents = [
    {
      id: 1,
      name: 'John Doe',
      phoneNumber: '123-456-7890',
      status: 'Active',
      image: 'student1.jpg', // Provide the image file path
    },
    {
        id: 2,
        name: 'John Cena',
        phoneNumber: '123-456-7890',
        status: 'Active',
        image: 'student1.jpg', // Provide the image file path
      },
      {
        id: 3,
        name: 'John Wayne',
        phoneNumber: '123-456-7890',
        status: 'Active',
        image: 'student1.jpg', // Provide the image file path
      },
    // Add more student data as needed
  ];

  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingStudent, setIsAddingStudent] = useState(false); // State for the Add Student form/modal



  // Function to handle student deletion
  const handleDeleteStudent = (studentId) => {
    // Implement your logic to delete a student by ID
    // Update the 'students' state accordingly
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to open the Add Student form/modal
  const openAddStudentForm = () => {
    setIsAddingStudent(true);
  };

  return (
    <div className="flex h-screen">
        <Sidebar />
        <div className="ml-6 w-3/4 p-4">
            <h2 className="text-xl font-semibold mb-8">Manage Clients</h2>
            
            <div className="flex mb-4 ">
                    {/* Search bar */}
                <div className="mb-4 w-3/4 mt-4">
                    <input
                    type="text"
                    placeholder="Search students..."
                    className="border rounded py-2 px-3 w-full "
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {/* Add Student button */}
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
                    onClick={openAddStudentForm}
                >
                    <Plus size={16} className="mr-2 inline" />
                    Add Client
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredStudents.map((student) => (
                <div
                    key={student.id}
                    className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
                >
                    <img
                    src={student.image}
                    alt={student.name}
                    className="w-20 h-20 mx-auto rounded-full mb-2"
                    />
                    <h3 className="text-lg font-semibold">{student.name}</h3>
                    <p className="text-gray-600">{student.phoneNumber}</p>
                    <p className="text-green-500 font-semibold">{student.status}</p>
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
                        handleDeleteStudent(student.id);
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

export default ManageStudents;
