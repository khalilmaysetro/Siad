import React, { useEffect,useId } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import {generateUniqueId} from './util'

const Formcars = ({addCar}) => {
    
    const [file, setFile] = useState(null);
    const [Data, setFormData] = useState({
        Brand: '',
        Model: '',
        Motorization: '',
        Color: '',
        image: null // Default to 'client'
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }; 
     
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post('http://localhost:3002/car/upload-car', Data,
           {
          headers:{"Content-Type" : "multipart/form-data"}
           }
          );

          console.log('Form submitted:', res.data);
          console.log(Data);
          console.log(res.data)
          addCar(res.data)
        } catch (error) {
          console.error(error);
        }
      };

      
    const handleFileChange = (e) => {
        // Get the selected file from the input
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFormData((prevData) => ({
          ...prevData,
          image: selectedFile,
        }));
      };
  return (
   <div>
     <Header />
     <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-14 mb-16"
    >
      <h2 className="text-2xl font-bold mb-8">cars Form</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Brand
        </label>
        <input
        type="text"
        id="Brand"
        name="Brand"  
        className="mt-1 p-2 w-full border rounded-md"
        value={Data.Brand}
        onChange={handleChange}
        required
        />
    </div>
    <div className="mb-4">
        <label htmlFor="Model" className="block text-sm font-medium text-gray-600">
        model
        </label>
        <input
        type="text"
        id="Model"
        name="Model"
        className="mt-1 p-2 w-full border rounded-md"
        value={Data.Model}
        onChange={handleChange}
        required
        />
    </div>
    <div className="mb-4">
        <label htmlFor="Motorization" className="block text-sm font-medium text-gray-600">
        motorization
        </label>
        <input
        id="Motorization"
        name="Motorization"
        className="mt-1 p-2 w-full border rounded-md"
        value={Data.Motorization}
        onChange={handleChange}
        required
        />
    </div>
  
    <div className="mb-4">
        <label htmlFor="Color" className="block text-sm font-medium text-gray-600">
        color
        </label>
        <input
        type="text"
        id="Color"
        name="Color"
        className="mt-1 p-2 w-full border rounded-md"
        onChange={handleChange}
        value={Data.Color}
        required
        />
    </div>
    <div className="mb-4">
        <label htmlFor="photo" className="block text-sm font-medium text-gray-600">
          Upload Photo
        </label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*" // Specify that only image files are allowed
          onChange={handleFileChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
    <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleSubmit}
    >
        Add car
    </button>
</form>
</div> 
  );
}
export default Formcars