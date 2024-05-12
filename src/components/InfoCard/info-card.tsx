import { formatString } from "../../utils/formatString";
import { Pokemon } from "../../types/pokemon";

interface InfoCardProps {
  pokemon: Pokemon | undefined;
}

const InfoCard: React.FC<InfoCardProps> = ({ pokemon }) => {
  return (
    <div className="flex flex-col p-6 mx-auto overflow-y-auto bg-white shadow-md text-md md:w-1/2 rounded-xl card">
      {!pokemon || !pokemon.sprites || !pokemon.sprites.front_default ? (
        <h2 className="text-2xl font-bold text-center">
          Pokemon data is not available
        </h2>
      ) : (
        <div className="w-full p-6 space-y-3 text-left border border-gray-200">
          <h2 className="text-2xl font-bold text-center">
            {formatString(pokemon.name)}
          </h2>
          <img
            className="w-48 m-auto"
            src={pokemon.sprites.front_default}
            alt={`Image of ${pokemon.name}`}
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
