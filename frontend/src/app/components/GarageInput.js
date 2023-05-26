import React, { useState } from 'react';
import {FaArrowLeft} from 'react-icons/fa';

const GarageInputPage = ({onClose}) => {
  const [bikeType, setBikeType] = useState('');
  const [bikeMaker, setBikeMaker] = useState('');
  const [bikeModel, setBikeModel] = useState('');
  const [priceAsk, setPriceAsk] = useState('');
  const [images, setImages] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    // Update the respective state based on the input field's name
    if (name === 'bikeType') {
      setBikeType(value);
    } else if (name === 'bikeMaker') {
      setBikeMaker(value);
    } else if (name === 'bikeModel') {
      setBikeModel(value);
    } else if (name === 'priceAsk') {
      setPriceAsk(value);
    }
  };

  const handleImageUpload = (event) => {
    const { files } = event.target;

    // Convert FileList to an array
    const uploadedImages = Array.from(files);
    setImages(uploadedImages);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform further actions, such as submitting the form data to a server

    // Reset the form after submission
    setBikeType('');
    setBikeMaker('');
    setBikeModel('');
    setPriceAsk('');
    setImages([]);
  };

  return (
    <div className="fixed bottom-0 bg-white border border-black h-2/3 rounded-xl shadow-xl w-full left-0 overflow-y-auto">
  <button className="absolute left-2 top-2 mb-12 bg-white text-gray-500 rounded-full p-2 shadow-md z-10" onClick={onClose}>
    <FaArrowLeft className="text-lg" />
  </button>
  <h1 className="text-lg text-black font-bold mt-10">Add a bike to your garage</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bikeType" className="block text-black mb-2">Bike Type:</label>
          <input
            type="text"
            id="bikeType"
            name="bikeType"
            value={bikeType}
            onChange={handleInputChange}
            placeholder="Enter bike type"
            className="w-full mb-5 font-sans border-gray-300 border text-black rounded py-2 focus:outline-none focus:border-green-500"
          />
        </div>
        <div>
          <label htmlFor="bikeMaker" className="block text-black mb-2">Bike Maker:</label>
          <input
            type="text"
            id="bikeMaker"
            name="bikeMaker"
            value={bikeMaker}
            onChange={handleInputChange}
            placeholder="Enter bike manufacturer"
            className="w-full mb-5 font-sans border-gray-300 border text-black rounded py-2 focus:outline-none focus:border-green-500"
          />
        </div>
        <div>
          <label htmlFor="bikeModel" className="block text-black mb-2">Bike Model:</label>
          <input
            type="text"
            id="bikeModel"
            name="bikeModel"
            value={bikeModel}
            onChange={handleInputChange}
            placeholder="Enter bike model"
            className="w-full mb-5 font-sans border-gray-300 border text-black rounded py-2 focus:outline-none focus:border-green-500"
          />
        </div>
        <div>
          <label htmlFor="priceAsk" className="block text-black mb-2">Price Ask:</label>
          <input
            type="text"
            id="priceAsk"
            name="priceAsk"
            value={priceAsk}
            onChange={handleInputChange}
            placeholder="Enter price per day"
            className="w-full mb-5 font-sans border-gray-300 border text-black rounded py-2 focus:outline-none focus:border-green-500"
          />
        </div>
        <div>
          <label htmlFor="imageUpload" className="block text-black mb-5">Upload Images:</label>
          <input
            type="file"
            id="imageUpload"
            name="imageUpload"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            placeholder="Add images of the bike"
          />
        </div>
        <button type="submit"
                method="POST"
                className="bg-black text-white font-semibold py-2 rounded-full w-full mt-5 mb-10"
        >Submit</button>
      </form>
      
    </div>
  );
};

export default GarageInputPage;
