import React from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import App from "./App.tsx";
import "./index.css";
import { getRandomPokemon } from "./services/pokedex-api.ts";

// Maybe remove react strictmode instead of calling the api so high in the tree
getRandomPokemon().then((pokemonData) => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App initialPokemon={pokemonData} />
    </React.StrictMode>
  );
});
