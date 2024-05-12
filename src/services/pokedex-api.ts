import { Pokemon } from "../types/pokemon";

// Fetch a random Pokemon
export async function getRandomPokemon(): Promise<Pokemon | undefined> {
  try {
    const totalResponse = await fetch(
      "https://pokeapi.co/api/v2/pokemon-species"
    );
    const totalData = await totalResponse.json();
    const total = totalData.count;
    const randomId = Math.floor(Math.random() * total) + 1;

    // Fetch the Pokemon with the random ID
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    const pokemonData = await pokemonResponse.json();

    return pokemonData;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Fetch all Pokemon
export async function fetchAllPokemon() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=1118"
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Fetch a list of Pokemon by name
export async function searchPokemon(name: string) {
  try {
    const allPokemon = await fetchAllPokemon();
    const results = allPokemon.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    return results;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Fetch a Pokemon by name
export async function fetchPokemonByName(
  name: string
): Promise<Pokemon | undefined> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
