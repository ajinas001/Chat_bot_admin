import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Plus } from 'lucide-react';

const DatePicker = ({ isOpen, onClose, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [leftMonth, setLeftMonth] = useState(new Date(2025, 1)); // February 2025
  const [rightMonth, setRightMonth] = useState(new Date(2025, 1)); // February 2025

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction, side) => {
    if (side === 'left') {
      const newDate = new Date(leftMonth);
      newDate.setMonth(newDate.getMonth() + direction);
      setLeftMonth(newDate);
    } else {
      const newDate = new Date(rightMonth);
      newDate.setMonth(newDate.getMonth() + direction);
      setRightMonth(newDate);
    }
  };

  const handleDateSelect = (day, month) => {
    if (day) {
      const selected = new Date(month.getFullYear(), month.getMonth(), day);
      setSelectedDate(selected);
    }
  };

  const isDateSelected = (day, month) => {
    if (!day || !selectedDate) return false;
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === month.getMonth() && 
           selectedDate.getFullYear() === month.getFullYear();
  };

  const handleOk = () => {
    if (selectedDate && onDateSelect) {
      onDateSelect(selectedDate);
    }
    onClose();
  };

  const CalendarGrid = ({ month, side }) => {
    const days = getDaysInMonth(month);
    
    return (
      <div className="bg-white">
        {/* Month Header */}
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => navigateMonth(-1, side)}
            className="p-1 hover:bg-gray-100 rounded"
            type="button"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <h3 className="font-medium text-gray-900">
            {months[month.getMonth()]} {month.getFullYear()}
          </h3>
          <button 
            onClick={() => navigateMonth(1, side)}
            className="p-1 hover:bg-gray-100 rounded"
            type="button"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Days of Week Header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => handleDateSelect(day, month)}
              disabled={!day}
              type="button"
              className={`
                h-8 w-8 text-sm rounded flex items-center justify-center
                ${!day ? 'invisible' : ''}
                ${isDateSelected(day, month) 
                  ? 'bg-blue-600 text-white font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
                ${day === 10 && !isDateSelected(day, month) ? 'bg-blue-100 text-blue-600' : ''}
              `}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl w-full mx-4">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Content Calendar</h2>
          <p className="text-gray-600">Schedule and plan your Social Media Posts</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Month View
            </button>
            <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              Schedule Post
            </button>
          </div>
          <div className="text-sm text-gray-600">
            Date Picker
          </div>
        </div>

        <div className="flex justify-between space-x-8">
          {/* Left Calendar */}
          <div className="flex-1">
            <div className="text-sm text-gray-600 mb-2">Mon, Aug 10</div>
            <CalendarGrid month={leftMonth} side="left" />
          </div>
          
          {/* Right Calendar */}
          <div className="flex-1">
            <div className="text-sm text-gray-600 mb-2">February 2025</div>
            <CalendarGrid month={rightMonth} side="right" />
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-6 pt-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={handleOk}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            type="button"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;