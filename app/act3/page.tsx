'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CalculatorApp = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const router = useRouter();

  const handleReset = () => {
    setNum1('');
    setNum2('');
  };

  const goToAct2 = () => {
    router.push('/act2');
  };

  const goToAct4 = () => {
    router.push('/act4');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8 bg-gradient-to-r bg-gray-900 p-8">
      <h2 className="text-4xl font-semibold text-white mb-6 drop-shadow-lg">Simple Calculator</h2>
      
      <div className="flex space-x-6 mb-6">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="border-2 border-gray-300 p-4 rounded-md w-48 text-center text-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-lg"
          placeholder="0"
        />
        <span className="text-4xl font-semibold text-white">+</span>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="border-2 border-gray-300 p-4 rounded-md w-48 text-center text-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-lg"
          placeholder="0"
        />
      </div>

      <div className="mt-6 text-3xl font-bold text-white">
        <p>Sum: {parseFloat(num1 || '0') + parseFloat(num2 || '0')}</p>
      </div>

      <div className="flex flex-col space-y-6 mt-6">
        <button
          onClick={handleReset}
          className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 text-xl transform transition duration-300 hover:scale-105"
        >
          Reset
        </button>

        <div className="flex space-x-6 mt-4">
          <button
            onClick={goToAct2}
            className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 text-xl transform transition duration-300 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Go to Act 2</span>
          </button>

          <button
            onClick={goToAct4}
            className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 text-xl transform transition duration-300 flex items-center space-x-2"
          >
            <span>Go to Act 4</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
