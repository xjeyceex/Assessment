'use client'
import { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count * 2);
  const decrement = () => setCount(count / 2);
  const reset = () => setCount(1);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 space-y-8 p-6">
      <h2 className="text-4xl font-semibold text-black mb-6">Counter App</h2>
      
      <div className="flex space-x-8 mb-6">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Decrement
        </button>
        
        <button
          onClick={increment}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Increment
        </button>
      </div>
      
      <div className="text-center">
        <p className="text-3xl font-bold text-black mb-2">Count: {count}</p>
        <p className={`text-xl font-medium ${count % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
          {count % 2 === 0 ? 'Even' : 'Odd'}
        </p>
      </div>

      <button
        onClick={reset}
        className="bg-gray-500 text-white px-6 py-3 rounded-lg mt-6 shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        Reset
      </button>
    </div>
  );
};

export default CounterApp;
