import React, { useState, useEffect } from 'react';
import '../../assets/css/ticker.css'; // Create a CSS file for styling

const Ticker = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const tickerSpeed = 0.5; // Speed of scrolling (adjust as needed)

  const scrollTicker = () => {
    setScrollPosition(scrollPosition + tickerSpeed);
  };

  useEffect(() => {
    const timer = setInterval(scrollTicker, 200); // Interval for smoother animation
    return () => clearInterval(timer);
  }, [scrollPosition]);

  useEffect(() => {
    if (scrollPosition >= 100) {
      setScrollPosition(0);
      setCurrentItemIndex((currentItemIndex + 1) % items.length);
    }
  }, [scrollPosition, currentItemIndex, items.length]);

  return (
    <div className="ticker-container">
      <div
        className="ticker-content"
        style={{ transform: `translateY(-${scrollPosition}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="ticker-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;