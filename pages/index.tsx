import { getPokemons } from "../repositories/pokemonRepository";
import PokemonCard from "../components/pokemoncard";
import AppBar from "../components/appbar";
import AppHead from "../components/apphead";
import { PokemonWrapper } from "../models/pokemonwrapper";

type PokemonListProps = {
  pokemons: PokemonWrapper[]
}

const PokemonList = (props: PokemonListProps) => {
    return (
      <div>
        <AppHead />
        <AppBar />
        <div className="flex flex-wrap bg-pokemon-primary mt-14">
          {props.pokemons.map((pokemon) => (
            <PokemonCard  key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
      
    )
  }

export async function getStaticProps() {
  const data = await getPokemons(2000)
  const pokemons = JSON.parse(JSON.stringify(data))

  return {
    props: {
      pokemons,
    },
  }
}

export default PokemonList
  