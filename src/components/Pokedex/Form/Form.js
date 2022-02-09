import UiContainer from "components/UI/Container/Container";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import './Form.css'

const initValue = {
    nomePokemon: '',
    Numero: '',
    Descricao: '',
    UrlImagem: '',
    Tipo:'',
    
}

const PokemonForm = ({id}) => {
    const [values, setvalues] = useState (initValue);
    const history =  useNavigate();
    console.log(id);
    
    function onChange(ev){
        const {name, value} = ev.target;
        setvalues({...values, [name]:value });
    }

    function onSubmit(ev){
        ev.preventDefault();
        axios.post('http://localhost:8090/home', values)
            .then((response) =>{
                history('/')
            })
    }

    return (
    <div>
        <h1>POKEDEX - ESTUDOS</h1>
        <h2>Cadastro de Pokemons</h2>
         
         
         <form onSubmit={onSubmit}>
            <div className="Pokemon-form__group">
                <label htmlFor="nomePokemon"><b>Nome do Pokemon : </b></label>
                <input id="nomePokemon" name="nomePokemon" placeholder="Nome do pokemon" onChange={onChange}/>
            </div>
            <div className="Pokemon-form__group">
                <label htmlFor="numero"><b>Numero do Pokemon : </b></label>
                <input type="number" id="numero" name="numero" placeholder="Numero" onChange={onChange}/>
            </div>
            <div className="Pokemon-form__group">
                <label htmlFor="descricao"><b>Descrição : </b></label>
                <input id="descricao" name="descricao" placeholder="Descrição do pokemon (max 255 caracteres)" onChange={onChange}/>
            </div>
            <div className="Pokemon-form__group">
                <label htmlFor="urlImagem"><b>Imagem : </b></label>
                <input id="urlImagem" name="urlImagem" placeholder="Utilizar apenas URL" onChange={onChange}/>
            </div>
            <div className="Pokemon-form__group">
                <label htmlFor="tipo"><b>Tipo : </b></label>
                <input id="tipo" name="tipo" placeholder="Tipo do Pokemon (separar por virgulas)" onChange={onChange}/>
            </div>
            <div>
                <button type="submit">Cadastrar</button>
            </div>
        </form>


    </div>
)};

export default PokemonForm