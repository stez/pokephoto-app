import { PokemonWrapper } from "./models/pokemonwrapper";
import { getPokemons } from "./repositories/pokemonRepository";
import React, { useState, useEffect } from 'react';
import PokemonCard from "./components/pokemoncard";
import AppBar from "./components/appbar";

function PokemonList() {
    const [data, setData] = useState([] as PokemonWrapper[])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      getPokemons(50)
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No pokemon data</p>

    return (
      <div>
        <AppBar />
        <div className="flex flex-wrap bg-pokemon-primary mt-14">
          {data.map((pokemon) => (
            <PokemonCard  key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
      
    )
  }

export default PokemonList
  