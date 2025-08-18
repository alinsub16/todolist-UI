import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MiniCalendar = () => {
     const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get today's date
    const today = new Date(); 
    const isThisMonth =
    today.getFullYear() === year && today.getMonth() === month;
    
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const prevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    let calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday =
        isThisMonth && today.getDate() === d; // check if it's today
      
      calendarDays.push(
        <div
          key={d}
          className={`p-1 text-center rounded-lg cursor-pointer transition
            ${isToday ? "bg-blue-100 text-gray-800 font-bold" : "hover:bg-white/20"}
          `}
        >
          {d}
        </div>
      );
    }

  return (
    <>
    <div className="bg-white/15 backdrop-blur-md rounded-2xl shadow-lg p-2 text-white w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <button onClick={prevMonth} className="px-2 py-1 hover:bg-white/20 rounded">
          ‹
        </button>
        <span className="font-semibold">{monthNames[month]} {year}</span>
        <button onClick={nextMonth} className="px-2 py-1 hover:bg-white/20 rounded">
          ›
        </button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 text-center text-sm mb-2 opacity-80">
        {days.map(day => (
          <div key={day} className="font-medium">{day}</div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 text-sm">
        {calendarDays}
      </div>
    </div>
    </>
  )
}

export default MiniCalendar
