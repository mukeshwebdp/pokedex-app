import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails(){
    const {id} = useParams()
    const [pokemon, setPokemon] = useState({})
    async function downloadPokemon(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t)=> t.type.name)
        })
        
    }
        useEffect(()=>{
            downloadPokemon()
        },[])
    return(
        <>
            <div className="box">
                <img src={pokemon.image} alt={pokemon.name} />
                <div  className="box-data">
                    <p>Name: {pokemon.name}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p> height: {pokemon.height}</p>
                    <div className="Pokemon-type"> { pokemon.types && pokemon.types.map((t)=><p key={t}> {t}</p>)} </div>
                </div>
            </div>
            
        </>
    )
}

export default PokemonDetails;