import { Routes, Route } from "react-router-dom"
import Pokedex from "../compentent/Pokedex/Pokedex"
import PokemonDetails from "../compentent/pokemonDetails/PokemonDetails";

function CustomRoutes(){
    return(
       <Routes>
        <Route path="/" element={<Pokedex />}/>
        <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
       </Routes>
    )
}

export default CustomRoutes;