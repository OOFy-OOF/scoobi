import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import Image from 'next/image';
import {FaArrowLeft} from 'react-icons/fa';

const BikeSpecificPage = ({bike, onClose}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bike-details w-full">
        <button
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
            <FaArrowLeft/>
        </button>
        <div className="bike-name text-black ">{bike.name}</div>
      <SwipeableViews
        index={currentImageIndex}
        onChangeIndex={handleImageChange}
        enableMouseEvents
      >
        {bike.images.map((image, index) => (
          <div key={index} className="bike-image rounded-xl w-full">
            <Image src={image} alt={`Bike Image ${index + 1}`} className="rounded-xl w-full"/>
          </div>
        ))}
      </SwipeableViews>
      
      <div className="bike-renter text-black">Rented by: {bike.renter}</div>
      <div className="bike-price text-black">Price per day: ${bike.pricePerDay}</div>
      <div className="bike-location text-black">Location: {bike.location}</div>
      <a href="#" className="button">Rent</a>
      <a href="#" className="button chat-button">Chat with owner</a>

      <style jsx>{`
        .bike-details {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
        }

        .bike-image {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 300px;
        }

        .bike-image img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .image-controls {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .prev-button,
        .next-button {
          padding: 5px 10px;
          font-size: 24px;
          background-color: #ddd;
          border: none;
          cursor: pointer;
        }

        .prev-button:hover,
        .next-button:hover {
          background-color: #bbb;
        }

        .prev-button {
          margin-right: 10px;
        }

        .bike-name {
          font-size: 24px;
          margin-top: 10px;
        }

        .bike-renter {
          font-size: 18px;
          margin-top: 5px;
        }

        .bike-price {
          font-size: 18px;
          margin-top: 5px;
        }

        .bike-location {
          font-size: 18px;
          margin-top: 5px;
        }

        .button {
          display: inline-block;
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4CAF50;
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
          margin-right: 10px;
        }

        .chat-button {
          background-color: #008CBA;
        }
      `}</style>
    </div>
  );
};

export default BikeSpecificPage;
