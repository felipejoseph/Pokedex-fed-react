import React from "react";
import { useParams } from "react-router-dom";
import PokemonForm from "components/Pokedex/Form/Form";
import UiContainer from "components/UI/Container/Container";


const PagesPokemonForm = () => {
    const { id } = useParams();

    return(

        <UiContainer>
            <PokemonForm id={id ? Number.parseInt(id, 10): null}/>
            </UiContainer>
        
    )

}

export default PagesPokemonForm;
