import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarWidget = ({ onFilter }) => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateClick = (date) => {
    let newSelectedDates = [];
  
    if (selectedDates.length === 0) {
      // Start date is selected
      newSelectedDates = [date];
    } else if (selectedDates.length === 1 && date > selectedDates[0]) {
      // End date is selected
      newSelectedDates = [selectedDates[0], date];
    } else {
      // Reset selection if a different start date is clicked
      newSelectedDates = [date];
    }
  
    setSelectedDates(newSelectedDates);
  };
  
  

  const isDateSelected = (date) => {
    if (selectedDates.length === 2) {
      // Check if the date is within the selected range
      handleFilter();
      return date >= selectedDates[0] && date <= selectedDates[1];
    } else {
      // Check if the date is the selected date
      return selectedDates.length === 1 && date.toDateString() === selectedDates[0].toDateString();
    }
  };


  const handleFilter = () => {
    // Pass the selected dates to the parent component
    onFilter(selectedDates[0], selectedDates[1]);
  };

  return (
    <div>
      <Calendar
        onClickDay={handleDateClick}
        tileClassName={({ date }) => (isDateSelected(date) ? 'selected' : '')}
        selectRange={true}
        allowPartialRange={true}
        value={selectedDates}
        className="text-black rounded-xl"
      />
    </div>
  );
};

export default CalendarWidget;
