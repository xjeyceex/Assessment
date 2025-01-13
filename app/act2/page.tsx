'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const goToAct1 = () => router.push('/act1');
  const goToAct3 = () => router.push('/act3');

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

      <div className="flex space-x-8 mt-6">
        <button
          onClick={goToAct1}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
          <span>Go to Act 1</span>
        </button>

        <button
          onClick={goToAct3}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 flex items-center space-x-2"
        >
          <span>Go to Act 3</span>
          <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
