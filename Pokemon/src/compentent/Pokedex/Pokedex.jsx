import Search from "../Search/Search";
import PokemonList from "../pokemonList/PokemonLIst";

function Pokedex(){
    return(
        <div className="pokedex-wraper">
            
            <Search />
            <PokemonList />
        </div>
        
    )
}
export default Pokedex;