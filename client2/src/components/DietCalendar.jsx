import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DietCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dietDates, setDietDates] = useState([]);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('User not authenticated');
    } else {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUsername(decodedToken.username);
    }
  }, []);

  useEffect(() => {
    const fetchDietDates = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/diet/diet-dates/${username}`);
        console.log('Diet dates response:', response.data);
        setDietDates(response.data.dietDates);
      } catch (error) {
        console.error('Error fetching diet dates:', error);
      }
    };

    fetchDietDates();
  }, [username]);

  useEffect(() => {
    // Initialize dietDates from local storage on component mount
    const storedDietDates = JSON.parse(localStorage.getItem('dietDates'));
    if (storedDietDates) {
      setDietDates(storedDietDates);
    }
  }, []);

  console.log('Diet dates:', dietDates);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const isDateDietMaintained = (date) => {
    if (!date) return false;
    const dateString = date instanceof Date ? date.toDateString() : date;
    return dietDates.includes(dateString);
  };

  const tileClassName = ({ date }) => {
    const dateString = date.toDateString();
    if (isDateDietMaintained(dateString)) {
      return 'diet-maintained';
    }
    return '';
  };

  const addDietDate = async () => {
    if (selectedDate && !isDateDietMaintained(selectedDate.toDateString())) {
      try {
        console.log('Adding diet date:', selectedDate.toDateString());
        const response = await axios.post(`http://localhost:3001/diet/track/${username}`, {
          dates: [selectedDate.toDateString()],
        });
        console.log('Track diet response:', response.data);
        const updatedDates = [...dietDates, selectedDate.toDateString()];
        setDietDates(updatedDates);
        localStorage.setItem('dietDates', JSON.stringify(updatedDates)); // Save to local storage
      } catch (error) {
        console.error('Error tracking diet:', error);
      }
    }
  };

  const calculateDaysMaintained = () => {
    return dietDates.length;
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Diet Calendar</h3>
      <div className="mb-4">
        <button onClick={addDietDate} className="bg-blue-500 text-white px-4 py-2 rounded">
          Mark Diet Maintained
        </button>
      </div>
      <Calendar
        onChange={handleDateClick}
        value={selectedDate}
        tileClassName={tileClassName}
      />
      {selectedDate && (
        <div className="mt-4">
          <p className="font-semibold">Selected Date:</p>
          <p>{selectedDate.toLocaleDateString()}</p>
        </div>
      )}
      <style>
        {`
          .diet-maintained {
            background-color: yellow;
          }
          .diet-added {
            background-color: blue !important;
          }
        `}
      </style>
      <div className="w-1/2">
        <h3 className="text-lg font-semibold mb-4">Diet Maintenance</h3>
        <p>Diet maintained for {calculateDaysMaintained()} days</p>
      </div>
    </div>
  );
};

export default DietCalendar;
