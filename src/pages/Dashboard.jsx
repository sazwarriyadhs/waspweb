import React from 'react';
import { useQuery, useAction } from 'wasp/client/operations';
import { getCars, getBikes, createCar, createBike } from 'wasp/client/operations';
import { Link } from 'wasp/client/router';

const DashboardPage = () => {
  const { data: cars, isLoading: loadingCars, error: errorCars } = useQuery(getCars);
  const { data: bikes, isLoading: loadingBikes, error: errorBikes } = useQuery(getBikes);
  const createCarFn = useAction(createCar);
  const createBikeFn = useAction(createBike);

  if (loadingCars || loadingBikes) return 'Loading...';
  if (errorCars || errorBikes) return 'Error: ' + (errorCars || errorBikes);

  const handleCreateCar = () => {
    const newCar = { make: 'Toyota', model: 'Corolla', year: 2022, price: 20000 };
    createCarFn(newCar);
  };

  const handleCreateBike = () => {
    const newBike = { make: 'Yamaha', model: 'YZF', year: 2022, price: 15000 };
    createBikeFn(newBike);
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <div className='mb-4'>
        <h2 className='text-xl font-semibold'>Cars</h2>
        {cars.map((car) => (
          <div key={car.id} className='p-2 bg-blue-100 rounded my-2'>
            <p>{car.make} {car.model} - {car.year}</p>
            <p>Price: ${car.price}</p>
          </div>
        ))}
        <button onClick={handleCreateCar} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'>
          Add Car
        </button>
      </div>
      <div>
        <h2 className='text-xl font-semibold'>Bikes</h2>
        {bikes.map((bike) => (
          <div key={bike.id} className='p-2 bg-green-100 rounded my-2'>
            <p>{bike.make} {bike.model} - {bike.year}</p>
            <p>Price: ${bike.price}</p>
          </div>
        ))}
        <button onClick={handleCreateBike} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2'>
          Add Bike
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;
