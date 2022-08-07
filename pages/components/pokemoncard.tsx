import { PokemonWrapper } from '../models/pokemonwrapper';
import Image from 'next/image';
import Link from 'next/link'

type CardProps = {
    pokemon: PokemonWrapper
  }

function PokemonCard(props: CardProps) {
    return (
    <Link href={`/pokemon/${props.pokemon.id}`}>
    <div className="p-4 xl:lg:w-1/5 md:w-1/3 w-1/2 hover:bg-pokemon-secondary hover:cursor-pointer">
        <div className="rounded overflow-hidden shadow-lg bg-white">
            <Image 
                className="w-full bg-slate-100"
                src={props.pokemon.image}         
                alt="Picture of pokemon"
                layout="responsive"
                width={150}
                height={150}
            />
            <div className="px-6 py-4 content-center">
                <div className="font-bold text-xl mb-2 text-center">{props.pokemon.name.toUpperCase()}</div>
            </div>
        </div>
    </div>
    </Link>
    )
}

export default PokemonCard
  