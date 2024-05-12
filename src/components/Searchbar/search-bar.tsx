import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Pokemon } from "../../types/pokemon";
import { fetchPokemonByName, searchPokemon } from "../../services/pokedex-api";

interface IExtraProps {
  showCancel?: boolean;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  setSelectedPokemon: (pokemon: Pokemon) => void;
  selectedPokemon: Pokemon | undefined;
}

export const SearchBar: React.FC<
  IExtraProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  setSelectedPokemon,
  selectedPokemon,
  searchTerm,
  setSearchTerm,
  showCancel,
  ...props
}) => {
  const [results, setResults] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (searchTerm) {
      searchPokemon(searchTerm).then((data) => {
        if (data !== null && data !== undefined) {
          setResults(data);
        }
      });
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="relative w-auto">
      <label className="hidden" htmlFor="search">
        Search
      </label>
      <p className="hidden">
        Press <kbd>Ctrl</kbd> + <kbd>K</kbd> to open search
      </p>
      <div className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-10 pl-6 pointer-events-none">
        <MagnifyingGlassIcon className="stroke-gray-500" />
      </div>
      <input
        {...props}
        autoComplete="off"
        value={searchTerm}
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full h-10 px-4 pl-12 text-base text-gray-500 rounded-full focus:border-blue-500 focus:ring-blue-500"
      />
      {results.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg overflow-y-auto max-h-[500px]">
          <ul>
            {results.map((pokemon) => (
              <li
                key={pokemon.name}
                className="h-auto px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  fetchPokemonByName(pokemon.name).then((result) => {
                    if (result) {
                      setSelectedPokemon(result);
                    }
                  });
                  setResults([]);
                  console.log(selectedPokemon && selectedPokemon.name);
                }}
              >
                {pokemon.sprites && (
                  <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="w-3 h-3"
                  />
                )}
                <p>{pokemon.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showCancel && (
        <div className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-10">
          <button
            onClick={() => {
              console.log(searchTerm);
              setSearchTerm("");
              setTimeout(() => {
                console.log(searchTerm);
              }, 0);
            }}
          >
            <XCircleIcon className="w-6 h-auto stroke-gray-500" />
          </button>
        </div>
      )}
    </div>
  );
};
