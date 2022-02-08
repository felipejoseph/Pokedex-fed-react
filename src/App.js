import React from 'react';
import PokemonCard from 'components/Pokedex/pokemon/Pokemon';

const App = () => {

  const pokemon = {
    "id": 1,
    "Nome": "Bulbasauro",
    "Descrição": "tipo planta",
    "imageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    "Numero": "001",
    "Tipo":"Planta",
    "Descricao":"POKEMON DO TIPO PLANTA TESTE TESTE POKEMON DO TIPO PLANTA TESTE TESTEPOKEMON DO TIPO PLANTA TESTE TESTEPOKEMON DO TIPO PLANTA TESTE TESTE",
    "comments": [
      {
        "id": 1,
        "comment": "verde"
      }
    ]
  }

  return (
    <div className="App" style={{
      
      margin: '30px',
      
    }}>
      <PokemonCard pokemon = {pokemon}/>

    </div>
  );
}

export default App;
