// components/CustomCalendar.tsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

interface CustomCalendarProps {
  onDateChange: (date: Date)=>void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div className="rounded-md flex justify-center flex-col">
      <h1 className="card-title text-black text-center py-3 px-auto justify-center">
        Date: {format(selectedDate, "MMMM d, yyyy")}
      </h1>
      <Calendar onChange={() => handleDateChange} value={selectedDate} className="rounded-md" />
    </div>
  );
};

export default CustomCalendar;
