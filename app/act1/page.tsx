'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Home: React.FC = () => {
  const router = useRouter();

  const goToAct2 = () => {
    router.push('/act2');
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg px-8 py-4 rounded-xl bg-opacity-80 backdrop-blur-sm mb-8">
        Hello World
      </h1>
      <button
        onClick={goToAct2}
        className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 flex items-center space-x-2"
      >
        <span>Go to Act 2</span>
        <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
      </button>
    </div>
  );
};

export default Home;
