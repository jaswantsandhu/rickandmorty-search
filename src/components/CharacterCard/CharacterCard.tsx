import React from 'react';
import { Character } from '../../models/character';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white relative">
      <img className="w-full" src={character.image} alt={`Character ${character.name}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{character.name}</div>
        <ul className="text-gray-700">
          <li><span className="font-bold">Species:</span> {character.species}</li>
          <li><span className="font-bold">Status:</span> <span className={character.status === "Alive" ? "text-green-500" : "text-red-500"}>{character.status}</span></li>
          <li><span className="font-bold">Gender:</span> {character.gender}</li>
        </ul>
      </div>
      <div className="absolute top-1 right-1">
        {character.location && (
          <span className="w-full inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {character.location.name}
          </span>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
