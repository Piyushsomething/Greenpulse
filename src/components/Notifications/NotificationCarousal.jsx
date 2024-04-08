"use client"
import React, { useState, useEffect } from 'react';

const notifications = [
  "Notification 1: Lorem ipsum dolor sit amet.",
  "Notification 2: Consectetur adipiscing elit.",
  "Notification 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
];

const NotificationCarousel = () => {
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotificationIndex((prevIndex) => (prevIndex + 1) % notifications.length);
    }, 1000); // Change notification every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" p-4 rounded-md shadow-md">
      <div className="flex items-center justify-between">
        {/* <h3 className="text-lg font-semibold">Notifications</h3> */}
      </div>
      <div className="">
        <div className="transition-opacity duration-500 opacity-100">
          {notifications[currentNotificationIndex]}
        </div>
      </div>
    </div>
  );
};

export default NotificationCarousel;
