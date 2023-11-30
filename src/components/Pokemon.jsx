import axios from "axios";
import { useState, useEffect } from "react";

function PokemonFunction() {
  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function getPokemon() {
    setIsLoading(true)
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
      setPokemon(response.data.results);
      setIsLoading(false);
    });
  }

  const pokeData = [];

  for (let p of pokemon) {
    if (
      filter.length === 0 ||
      p.name.toLowerCase().startsWith(filter.toLowerCase()) ||
      p.name.toLowerCase().includes(filter.toLowerCase())
    )
      pokeData.push(
        <div>
          <h5>{p.name}</h5>
        </div>
      );
  }

  // useEffect(() => {
  //   getPokemon();
  // }, []);

  if(isLoading) {
    return <h1>LOADING</h1>
  }


  return (
    <div>
      <h1>Pokemon</h1>
      <input
        type="text"
        placeholder="Enter filter here"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={getPokemon}>Click here for a pokemon</button>
      {pokeData}
    </div>
  );
}

export default PokemonFunction;
