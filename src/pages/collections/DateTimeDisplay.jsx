import React, { useState, useEffect } from "react";

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const hour = dateTime.getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, [dateTime]);

  return (
    <div className="flex flex-col gap-4 ml-1 mr-1">
      <span className="flex flex-row justify-between p-2 rounded-md italic bg-gray-500 shadow-lg text-sm">
        <p>Date: {dateTime.toLocaleDateString()}</p>
        <p>Time: {dateTime.toLocaleTimeString()}</p>
      </span>

      <p className=" bg-gray-500 p-2 rounded-md italic shadow-lg">{greeting}</p>
    </div>
  );
};

export default DateTimeDisplay;
