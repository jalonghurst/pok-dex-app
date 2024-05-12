import { useState } from "react";
import "./App.css";
import InfoCard from "./components/InfoCard/info-card";
import { SearchBar } from "./components/Searchbar/search-bar";
import { Pokemon } from "./types/pokemon";

type AppProps = {
  initialPokemon: Pokemon | undefined;
};

const App: React.FC<AppProps> = ({ initialPokemon }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(initialPokemon);

  return (
    <div className="p-6 space-y-6 overflow-hidden">
      <a href="/">
        <img src="/logo.svg" className="h-24 m-auto logo" alt="Pokemon Logo" />
      </a>
      <div className="flex justify-center">
        <SearchBar
          searchTerm={searchTerm}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          setSearchTerm={setSearchTerm}
          showCancel
        />
      </div>
      <InfoCard pokemon={selectedPokemon} />
    </div>
  );
};

export default App;
