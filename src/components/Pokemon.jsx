import axios from "axios";
import { useState } from "react";

function PokemonFunction() {
    const [pokemon, setPokemon] = useState([]);
    
    function getPokemon() {

        axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => setPokemon(response))
    }

    const pokeData = [];

    for (let p of pokemon){
        pokeData.push(<p>{results}</p>)
    }
    
    return ( 

        <div>
            <h1>Pokemon</h1>
            <button onClick={getPokemon}>Click here for a Pokemon</button>
            {pokeData}
        </div>

     );
}

export default PokemonFunction;