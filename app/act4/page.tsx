'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faRedo } from '@fortawesome/free-solid-svg-icons';

const GrowButton = () => {
  const [size, setSize] = useState(1);
  const [color, setColor] = useState('#3490dc');

  const handleClick = () => {
    setSize(size * 2);
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  const handleReset = () => {
    setSize(1);
    setColor('#3490dc');
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      {/* Grow Button */}
      <button
        onClick={handleClick}
        className="absolute z-10 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-500 transform"
        style={{ transform: `scale(${size})`, backgroundColor: color }}
        aria-label="Grow Button"
      >
        GROW
      </button>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="absolute top-8 right-8 z-50 bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 flex items-center space-x-2 border-2 border-red-700"
        aria-label="Reset Button"
      >
        <FontAwesomeIcon icon={faRedo} className="text-lg" />
        <span>RESET</span>
      </button>

      {/* Navigation Buttons */}
      <Link
        href="/act3"
        className="absolute bottom-8 left-8 z-20 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center space-x-2 border-2 border-blue-700"
        aria-label="Back to Act3"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
        <span>Back</span>
      </Link>
      <Link
        href="/act5"
        className="absolute bottom-8 right-8 z-20 bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 flex items-center space-x-2 border-2 border-purple-700"
        aria-label="Go to Act5"
      >
        <span>Next</span>
        <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
      </Link>
    </div>
  );
};

export default GrowButton;
