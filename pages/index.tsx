import { PokemonWrapper } from "../models/pokemonwrapper";
import { getPokemons } from "../repositories/pokemonRepository";
import React, { useState, useEffect } from 'react';
import PokemonCard from "../components/pokemoncard";
import AppBar from "../components/appbar";
import Progbar from "../components/progbar";
import AppHead from "../components/apphead";

function PokemonList() {
    const [data, setData] = useState([] as PokemonWrapper[])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
      getPokemons(1500)
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])

    if (isLoading) return (
      <div>
        <AppHead />
        <Progbar />
        <AppBar />
        <div className="flex flex-wrap bg-pokemon-primary mt-14 h-screen">
        </div>
      </div>
    )

    return (
      <div>
        <AppHead />
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
  