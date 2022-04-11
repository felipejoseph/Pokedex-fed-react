import React from "react";
import './Pokemon.css';


const PokemonCard = ({pokemon}) => (

    <div className="pokemon-card">
       <img src={pokemon.urlImagem} className="pokemon-card__image" />

        <div className="pokemon-card__info">
            <div className="pokemon-card__Numero">{pokemon.numero}</div>
            <div className="pokemon-card__title">{pokemon.nomePokemon}</div>
            <div alig className="pokemon-card__tipo">Type : {pokemon.tipo} </div><br/>
             
            <div className="pokemon-card_descricao" ><h2>Descrição:</h2>{pokemon.descricao}</div>

        </div>
        
    </div>

)

export default PokemonCard;