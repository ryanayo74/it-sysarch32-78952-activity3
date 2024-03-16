import React from 'react';

function Pokemon({ pokemon, language }) {
  const languageMap = {
    english: 'english',
    japanese: 'japanese',
    chinese: 'chinese',
    french: 'french'
  };

  const getNameByLanguage = () => {
    const selectedLanguage = languageMap[language] || 'english';
    return pokemon.name[selectedLanguage];
  };

  return (
    <div className="Card">
      <img src={pokemon.image} alt={pokemon.name.english} className="pokemon-image" />
      <div className="Pokemon_Id">
        <p>[{pokemon.id}] {getNameByLanguage()} </p>
      </div>

      <div className="Pokemon">
        {pokemon.type.map((type, index) => (
          <p key={index} className={pokemon.type.length === 2 ? "PokemonType SideBySide" : "PokemonType"}>{type}</p>
        ))}
        <div className="Pokemon_Details">
        <p>HP: {pokemon.base.HP} </p>
        <p>Attack: {pokemon.base.Attack}</p>
        <p>Defense: {pokemon.base.Defense} </p>
        </div>
        <div className="Second_Pokemon_Details">
        <p>Speed: {pokemon.base.Speed}</p>
        <p>Sp.Attk: {pokemon.base["Sp. Attack"]}</p> 
        <p>Sp.Def: {pokemon.base["Sp. Defense"]}</p>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
