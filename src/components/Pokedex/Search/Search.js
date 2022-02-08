import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonCard from 'components/Pokedex/pokemon/Pokemon';
import "./Search.css"
import { Link } from "react-router-dom";

const PokemonSearch = () => {
    const [pokemon, setpokemon] = useState([]);
    const [search, setsearch] = useState('');

    

    useEffect(() => {
        const params = {};
        if(search){
           params.nomePokemon = search;
        }
        axios.get('http://localhost:8090/home',{params})
          .then((Response) => {
            setpokemon(Response.data);
            
          });
      },[search]);


     return (

        <div> 
            <div className="Pokemon-container">
                
                <header className="Pokemon__header">
                    <h1>Pokedex - Estudos</h1>
                    <Link to="/create">Cadastro de Pokemon</Link>
                </header>
                <input 
                    type="text"
                    className="Pokemon-conteudo__input" 
                    placeholder="Buscar pokemon"
                    value={search}
                    onChange={(ev) => setsearch(ev.target.value)}   
                    
                              
                />
                
                
                {pokemon.map((pokemon,ID) => (<PokemonCard key={ID} pokemon = {pokemon}/>))}
                                           
            
            </div>
            
        </div>

     );
}

export default PokemonSearch