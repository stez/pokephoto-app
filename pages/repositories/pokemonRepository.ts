import { PokemonWrapper } from "../models/pokemonwrapper"
import { Pokemon } from "../models/pokemon"

async function getPokemons(limit: number): Promise<PokemonWrapper[]>{
    return fetch('https://pokeapi.co/api/v2/pokemon?limit='+limit)
        .then((res) => res.json())
        .then((data) => data.results.map((el: Pokemon) => (new PokemonWrapper(el))))
}

async function getPokemon(id: number): Promise<PokemonWrapper[]>{
    return fetch('https://pokeapi.co/api/v2/pokemon/'+id)
        .then((res) => res.json())
}

export {getPokemons, getPokemon}