import React from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import App from "./App.tsx";
import "./index.css";
import { getRandomPokemon } from "./services/pokedex-api.ts";

getRandomPokemon().then(
  (pokemonData) => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App initialPokemon={pokemonData} />
      </React.StrictMode>
    );
  },
  (error) => {
    console.error("Failed to fetch Pokemon data:", error);
    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <App initialPokemon={undefined} />
      </React.StrictMode>
    );
  }
);