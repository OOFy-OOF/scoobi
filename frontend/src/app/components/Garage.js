import React, { useState } from 'react';
import Image from 'next/image';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import {FaPlus} from 'react-icons/fa';


//Just some dummy bike objects for testing
const bikes = [
  {
    id: 1,
    images: [require('../images/Mountain-Bike.png'), require('../images/bike2.jpeg'), require('../images/bike1.webp')],
    name: 'Mountain Bike',
    renter: 'Me',
    pricePerDay: 25,
    location: 'City A',
  },
  {
    id: 2,
    images: [require('../images/Mountain-Bike.png'), require('../images/bike2.jpeg'), require('../images/bike1.webp')],
    name: 'Mountain Bike',
    renter: 'Me',
    pricePerDay: 25,
    location: 'City A',
  }  
];

export default function GaragePage ({showInput}) {
  const [bikeImages, setBikeImages] = useState(
    bikes.reduce((acc, bike) => {
      acc[bike.id] = 0;
      return acc;
    }, {})
  );
    
    //Swiping methods
  const handleSwipeLeft = (bikeId) => {
    setBikeImages((prevBikeImages) => ({
      ...prevBikeImages,
      [bikeId]: (prevBikeImages[bikeId] + 1) % bikes.find((bike) => bike.id === bikeId).images.length,
    }));
  };

  const handleSwipeRight = (bikeId) => {
    setBikeImages((prevBikeImages) => ({
      ...prevBikeImages,
      [bikeId]: (prevBikeImages[bikeId] - 1 + bikes.find((bike) => bike.id === bikeId).images.length) % bikes.find((bike) => bike.id === bikeId).images.length,
    }));
  };

  return (
      <div className="w-full">
        {bikes.map((bike) => (
          <div key={bike.id} className="bg-white mb-4 w-auto">
            <SwipeableViews
              enableMouseEvents
              index={bikeImages[bike.id]}
              onChangeIndex={(index) => setBikeImages((prevBikeImages) => ({ ...prevBikeImages, [bike.id]: index }))}
              onSwipedLeft={() => handleSwipeLeft(bike.id)}
              onSwipedRight={() => handleSwipeRight(bike.id)}
              className="w-full"
            >
              {bike.images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-xl">
                  <Image src={image} alt={bike.name}className="object-cover" />
                </div>
              ))}
            </SwipeableViews>
            <div className="flex items-center w-full">
              <div>
                <h3 className="text-lg font-semibold text-black">{bike.name}</h3>
                <p className="text-gray-500">{bike.renter}</p>
                <p className="text-gray-500">Price per day: ${bike.pricePerDay}</p>
                <p className="text-gray-500">Location: {bike.location}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-white fixed top-0 w-full">
        <h2 className="text-2xl ml-1 font-sans text-black mb-2">Your Garage</h2>
        <button 
                className="absolute text-xl right-2 top-2 font-sans text-black mb-2"
                onClick={showInput}>
            <FaPlus/>
        </button>
        <hr className="border-gray-300" />
        </div>
      </div>
  );
};

