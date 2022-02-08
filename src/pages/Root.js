import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import PagesPokemonSearch from "./Pokemon/Search/pages/Pokemon/Search";

import PagesPokemonForm from "./Pokemon/Form/form";

  const Root = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PagesPokemonSearch/>}/>
                <Route path="/create" element={<PagesPokemonForm/>}/>
                <Route path="/edit/:id" element={<PagesPokemonForm/>}/>
            </Routes>
        </BrowserRouter>
    );


  }

  export default Root;