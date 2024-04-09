"use client"
import React, { useState, useEffect, useRef } from 'react';

const MovingText = () => {
  const [texts, setTexts] = useState([
    "Text 1: Lorem ipsum dolor sit amet.",
    "Text 2: Consectetur adipiscing elit.",
    "Text 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Text 4: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Text 5: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Text 6: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current.scrollWidth <= containerRef.current.clientWidth) {
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
      }
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [texts]);

  useEffect(() => {
    if (containerRef.current) {
      setTextWidth(containerRef.current.scrollWidth);
    }
  }, [texts, currentTextIndex]);

  return (
    <div className="flex items-center space-x-4 overflow-hidden">
      <div ref={containerRef} className={`w-full text-justify overflow-hidden`} style={{ animation: `marquee ${textWidth / 50}s linear infinite` }}>
        <p>{texts[currentTextIndex]}</p>
      </div>
    </div>
  );
};

export default MovingText;
