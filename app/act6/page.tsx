'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface CardData {
  avatar: string;
  name: string;
  description: string;
}

const CardList = () => {
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    // Fetching 5 random Pokémon from PokeAPI
    const fetchData = async () => {
      const ids = [1, 2, 3, 4, 5]; // Example IDs for Pokémon (Bulbasaur, Ivysaur, Venusaur, Charmander, Charmeleon)
      const pokemonPromises = ids.map(id =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(response => response.json())
          .then(json => ({
            avatar: json.sprites.front_default,
            name: json.name,
            description: `This is ${json.name}, a Pokémon with ID ${json.id}.`, // Simple description
          }))
      );
      const pokemonData = await Promise.all(pokemonPromises);
      setData(pokemonData);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {data.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-64 max-w-xs hover:shadow-xl transition-shadow">
          <Image
            src={item.avatar}
            alt={item.name}
            width={128} // Replace with the actual width in pixels
            height={128} // Replace with the actual height in pixels
            className="w-32 h-32 rounded-full mx-auto border-4 border-gray-200"
          />          
          <h3 className="text-2xl text-gray-800 text-center font-semibold mt-4">{item.name}</h3>
          <p className="text-gray-700 text-center mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
