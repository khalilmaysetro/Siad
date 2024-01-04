import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Trash2, Edit , Plus,} from 'react-feather'; // Import Feather Icons
import Sidebar from './Sidebar';
import Carsform from './Carsform'

const ManageCars = () => {

  const [cars, setCar] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingCar, setIsAddingCar] = useState(false); // State for the Add Student form/modal
  const[isLoading,setIsLoading]=useState(false)


  useEffect(()=>{
    recieve_cars()
  },[])
 
  const recieve_cars= async (e)=>{
    try{
        const res= await axios.get('http://localhost:3002/car/get-carsinfo')
        console.log(res.data.id)
        setCar(res.data)
        setIsLoading(true)
        //console.log(cars)
    }catch(error){

    }
  }
  // Function to handle student deletion
  const handleDeleteCars = async (carId) => {
    try{
      console.log(carId)
      const res= await axios.get(`http://localhost:3002/car/delete?id=${carId}`)
      setCar(prevcar=>prevcar.filter(car=>car._id!==carId))
      console.log(res.data)
    }catch (e){ 
      console.log(e,'yawwwww')
    }
   

  };
  useEffect(()=>{
    console.log(cars)
  },[cars])

  //const filteredCars = cars? cars.filter((car) =>
    //car.Brand.toLowerCase().includes(searchTerm.toLowerCase()) 
  //):[];

  // Function to open the Add Student form/modal
  const openAddCarForm = () => {
    setIsAddingCar(true);
  };
  const addCar= async(newcar)=>{
    try{
      setCar(prev=>[...prev,newcar])
      console.log(cars)
      console.log(isLoading)
      setIsAddingCar(false);
    }catch(error){
      console.log(error)
    }
   
  }
  const carImages = require.context('../Images/cars', false, /\.png$/);

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
            {isAddingCar && (<Carsform addCar={addCar}/>) }

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cars?.map((car) =>(

                <div
                    key={car._id}
                    className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
                >
                  {carImages.keys().includes(`./${car.Brand}.png`) ? (
            <img
              src={carImages(`./${car.Brand}.png`)}
              alt={car.name}
              className="w-20 h-20 mx-auto rounded-full mb-2"
            />
          ) : (
            <img
              src={null}
              alt={car.name}
              className="w-20 h-20 mx-auto rounded-full mb-2"
            />
          )}
                    
                    <p className="text-lg "> Brand : {car.Brand}</p>
                    <p className="text-lg "> Model : {car.Model}</p>
                    <p className="text-lg "> Motorization : {car.Motorization}</p>
                    <p className="text-lg "> Color : {car.Color}</p>

                    <div className="mt-4">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600"
                        onClick={openAddCarForm}  
                    >
                        <Edit size={16} /> {/* Edit icon */}
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        onClick={() => {
                        handleDeleteCars(car._id);
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
