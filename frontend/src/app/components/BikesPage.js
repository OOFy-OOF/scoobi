import React, { useState } from 'react';
import Image from 'next/image';
import SwipeableViews from 'react-swipeable-views-react-18-fix';

//Just some dummy bike objects for testing
const bikes = [
  {
    id: 1,
    images: [require('../images/Mountain-Bike.png'), require('../images/bike2.jpeg'), require('../images/bike1.webp')],
    name: 'Mountain Bike',
    renter: 'John Doe',
    pricePerDay: 25,
    location: 'City A',
  },
  {
    id: 2,
    images: [require('../images/bike2.jpeg'), require('../images/bike1.webp')],
    name: 'Mountain Bike',
    renter: 'John Doe',
    pricePerDay: 25,
    location: 'City A',
  },
  {
    id: 3,
    images: [require('../images/Mountain-Bike.png'), require('../images/bike2.jpeg'), require('../images/bike1.webp')],
    name: 'Mountain Bike',
    renter: 'John Doe',
    pricePerDay: 25,
    location: 'City A',
  },
  {
    id: 4,
    images: [require('../images/Mountain-Bike.png'), require('../images/bike1.webp')],
    name: 'Mountain Bike',
    renter: 'John Doe',
    pricePerDay: 25,
    location: 'City A',
  },
  {
    id: 5,
    images: [require('../images/Mountain-Bike.png'), require('../images/bike2.jpeg'), require('../images/bike1.webp')],
    name: 'Mountain Bike',
    renter: 'John Doe',
    pricePerDay: 25,
    location: 'City A',
  },
  {
    id: 6,
    images: [require('../images/Mountain-Bike.png'), require('../images/bike2.jpeg'), require('../images/bike1.webp')],
    name: 'Mountain Bike',
    renter: 'John D',
    pricePerDay: 30,
    location: 'City A',
  },
];

export default function BikesPage ({openBike}) {
  const [bikeImages, setBikeImages] = useState(
    bikes.reduce((acc, bike) => {
      acc[bike.id] = 0;
      return acc;
    }, {})
  );
  const [selectedBike, setSelectedBike] = useState();
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

  const handleOpenBikeSpecific = (bike) => {
    setSelectedBike(bike);
    console.log(selectedBike);
    openBike(bike);
  }

  return (
      <div className="w-full">
        <h2 className="text-2xl font-sans text-black mb-4 mt-10">Bikes for Rent</h2>
        {bikes.map((bike) => (
          <div key={bike.id} className="bg-white w-auto px-2">
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
                  <Image src={image} alt={bike.name} className="object-cover" />
                </div>
              ))}
            </SwipeableViews>
            <div className="flex items-center w-full">
              <div>
                <button 
                  className="text-lg font-semibold text-black"
                  onClick={() => handleOpenBikeSpecific(bike)}>
                  {bike.name}
                  </button>
                <p className="text-gray-500">{bike.renter}</p>
                <p className="text-gray-500">Price per day: ${bike.pricePerDay}</p>
                <p className="text-gray-500">Location: {bike.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

