import { formatString } from "../../formatString";
import { Pokemon } from "../../types/pokemon";

interface InfoCardProps {
  pokemon: Pokemon | undefined;
}

const InfoCard: React.FC<InfoCardProps> = ({ pokemon }) => {
  if (!pokemon || !pokemon.sprites || !pokemon.sprites.front_default) {
    return (
      <div className="flex flex-col items-center p-6 mx-auto overflow-y-auto text-sm bg-white shadow-md md:w-1/2 rounded-xl card">
        <h2 className="text-2xl font-bold text-center">
          Pokemon data is not available
        </h2>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center p-6 mx-auto overflow-y-auto text-sm bg-white shadow-md md:w-1/2 rounded-xl card">
      {pokemon && (
        <div className="w-full p-6 space-y-3 text-left border border-gray-200">
          <h2 className="text-2xl font-bold text-center">
            {formatString(pokemon.name)}
          </h2>
          <img
            className="w-1/2 m-auto sm:w-1/4"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <div>
            <span className="font-semibold">Type:</span>{" "}
            {pokemon.types
              .map((typeInfo) => formatString(typeInfo.type.name))
              .join(", ")}
          </div>
          <div>
            <span className="font-semibold">Moves:</span>{" "}
            {pokemon.moves
              .map((moveInfo) => formatString(moveInfo.move.name))
              .join(", ")}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
