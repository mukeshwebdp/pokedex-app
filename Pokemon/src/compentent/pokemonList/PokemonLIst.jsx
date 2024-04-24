import axios from "axios"
import { useEffect, useState } from "react"
import Pokemone from "../pokemon.jsx/Pokemon";

function PokemonList(){

    const [PokemonList, setPokemonList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [pokedexUrl, setPokedeUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')

    async function downloadPokemon(){
        //loading symbol show
        setIsLoading(true)
        const response = await axios.get(pokedexUrl); // this downloads list of 20 pokemons

        const pokemanResult = response.data.results; // we get the array of pokemons from result

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        // iterating over the array of pokemons, and using their url, to create array of promises
        // that will download 20 pokemons
        const pokemonResultPromise = pokemanResult.map((pokemon)=> axios.get(pokemon.url) )

        // passing that promise array to axiox.all
        const pokemonData = await axios.all(pokemonResultPromise)// array of 20 pokemon detailed data 
        
        // now iterate on th data of each pokemin, and extract id, name, image, types
        const PokeListResult = pokemonData.map((pokeData) =>{
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        })
        console.log(PokeListResult);
        setPokemonList(PokeListResult)

        setIsLoading(false)
    }
    useEffect(()=>{
        downloadPokemon()

    },[pokedexUrl])
    return(
        <div className="pokemon-List-wrapper">
            <div>
            <span className="hint">Pokemone List</span>
            </div>
            <div className="pokemon-wraper">
            {(isLoading)? 'Loading...' : 
            PokemonList.map((p)=> <Pokemone name={p.name} image={p.image} key={p.id} id = {p.id}/>)}
            </div>
            <div className="btn">
                <button disabled={prevUrl == null} onClick={()=> setPokedeUrl(prevUrl)} >Prev</button>
                <button disabled= {nextUrl == null} onClick={()=> setPokedeUrl(nextUrl)}>Next</button>
            </div>
        </div>
    )
}

export default PokemonList;