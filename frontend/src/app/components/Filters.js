import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { FaArrowLeft } from 'react-icons/fa';
import CalendarWidget from './Calendar2';

const FilterPage = ({ onClose }) => {
  const [typeFilter, setTypeFilter] = useState([]);
  const [eBikeFilter, setEBikeFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleTypeFilterChange = (value) => {
    if (typeFilter.includes(value)) {
      setTypeFilter(typeFilter.filter((item) => item !== value));
    } else {
      setTypeFilter([...typeFilter, value]);
    }
  };

  const handleEBikeFilterChange = (value) => {
    if (eBikeFilter.includes(value)) {
      setEBikeFilter(eBikeFilter.filter((item) => item !== value));
    } else {
      setEBikeFilter([...eBikeFilter, value]);
    }
  };

  const handlePriceFilterChange = (value) => {
    if (priceFilter.includes(value)) {
      setPriceFilter(priceFilter.filter((item) => item !== value));
    } else {
      setPriceFilter([...priceFilter, value]);
    }
  };

  const handleSelectedDates = (startDate, endDate) => {
        setStartDate(startDate);
        setEndDate(endDate);
  };

  const handleActivatedFilters = () => {
    // Do something with the activated filters incl. selected dates.
    console.log('Activated filters:', typeFilter, eBikeFilter, priceFilter);
    console.log(`Selected date(s): ${startDate} to ${endDate}`);
  };

  const renderTypeFilterOptions = () => {
    const options = ['Mountain-Bike', 'Road-Bike', 'Hybrid-Bike'];
    return options.map((option) => (
      <button
        key={option}
        className={`${
          typeFilter.includes(option) ? 'bg-black text-white' : 'text-black bg-white border border-black'
        }font-medium rounded-full text-sm px-4 py-2.5 mr-2 mb-2`}
        onClick={() => handleTypeFilterChange(option)}
      >
        {option}
      </button>
    ));
  };

  const renderEBikeFilterOptions = () => {
    const options = ['E-Bike', 'Regular'];
    return options.map((option) => (
      <button
        key={option}
        className={`${
          eBikeFilter.includes(option) ? 'bg-black text-white' : 'text-black bg-white border border-black'
        }font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2`}
        onClick={() => handleEBikeFilterChange(option)}
      >
        {option}
      </button>
    ));
  };

  const renderPriceFilterOptions = () => {
    const options = ['1-10', '10-20', '20-30'];
    return options.map((option) => (
      <button
        key={option}
        className={`${
          priceFilter.includes(option) ? 'bg-black text-white' : 'text-black bg-white border border-black'
        }font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2`}
        onClick={() => handlePriceFilterChange(option)}
      >
        {option}
      </button>
    ));
  };

  return (
    <div className="fixed bottom-0 bg-white border border-black h-2/3 rounded-xl shadow-xl w-full left-0 overflow-y-auto">
  <div className="fixed top-0 left-0 w-full bg-white p-3 shadow-md z-10">
    <h1 className="text-lg text-black font-bold">Sort</h1>
  </div>
  <button className="absolute left-2 top-2 mb-12 bg-white text-gray-500 rounded-full p-2 shadow-md z-10" onClick={onClose}>
    <FaArrowLeft className="text-lg" />
  </button>
  <div className="flex justify-center items-center mt-6">
    <CalendarWidget onFilter={handleSelectedDates}/>
  </div>
  <div className="mt-12 mb-10 px-4">
    <h1 className="text-xl text-black">Bike type</h1>
    <SwipeableViews enableMouseEvents className="mt-5">
      <div>{renderTypeFilterOptions()}</div>
    </SwipeableViews>
  </div>
  <div className="mb-10 px-4">
    <h1 className="text-xl text-black">Regular/E-Bike</h1>
    <SwipeableViews enableMouseEvents className="mt-5">
      <div>{renderEBikeFilterOptions()}</div>
    </SwipeableViews>
  </div>
  <div className="mb-5 px-4">
    <h1 className="text-xl text-black">Price</h1>
    <SwipeableViews enableMouseEvents className="mt-5">
      <div>{renderPriceFilterOptions()}</div>
    </SwipeableViews>
  </div>
  <button className="absolute right-5 bg-black text-white font-sans rounded-full p-2 shadow-md" onClick={handleActivatedFilters}>
    Show results
  </button>
</div>
  );
};  

export default FilterPage;
