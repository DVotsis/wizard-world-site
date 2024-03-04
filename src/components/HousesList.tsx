"use client"

import React, { useState, useEffect } from 'react';

interface HouseTypes {
  id: string
  name: string
  founder: string
  animal: string
}

const HousesList = () => {


  const [houses, setHouses] = useState<HouseTypes[]>([]);
  useEffect(() => {
    fetch("https://wizard-world-api.herokuapp.com/houses")
      .then((res) => res.json())
      .then((data) => setHouses(data));

  }, []);

  // Dynamic color change based on name 
  const houseGradients: any = {
    Gryffindor: 'from-red-500 to-yellow-500',
    Ravenclaw: 'from-blue-500 to-gray-300',
    Hufflepuff: 'from-yellow-500 to-black',
    Slytherin: 'from-green-500 to-black',
  };

  return (
    <div style={{ fontFamily: 'Verdana' }}>
      {houses.map((house, index) => (
        <div key={index} className="mb-4 p-4 rounded-lg border-2 shadow-lg w-80">
          <div className='flex justify-between'>
            <h3 className="text-xl font-bold text-gray-900">{house.name}</h3>
            <p className="text-xs text-gray-700">{house.animal}</p>
          </div>
          <div className={`h-4 mt-2 rounded bg-gradient-to-l ${houseGradients[house.name]}`}></div>
          <p className="text-xs mt-2 text-black">Founder: <span className='font-bold'>{house.founder}</span></p>
        </div>
      ))}
    </div>
  );
};

export default HousesList;
