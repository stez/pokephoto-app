import { useRouter } from 'next/router'
import AppBar from '../components/appbar'
import { PokemonWrapper } from "../models/pokemonwrapper"
import { getPokemon } from "../repositories/pokemonRepository";
import Image from 'next/image';

type PokemonProps = {
  pokemon: PokemonWrapper
}

const PokemonDetail = (props: PokemonProps) => {
  const router = useRouter()
  const { id } = router.query
 debugger
  return (
    <div>
        <AppBar />
        <div className='relative min-h-screen flex mt-14'> 
          <div className="flex flex-col items-center w-64 bg-pokemon-primary p-4 content-center">
            <div>
              <Image src={props.pokemon.sprites.other['official-artwork'].front_default} height={150} width={150} alt="Pokemon Logo" />
            </div>
            <div className=' text-white text-xl font-bold pt-4'>
              {props.pokemon.name.toUpperCase()}
            </div>
            <div className="flex flex-row items-start">
            {props.pokemon.types.map((type) => 
              (
                <div key={type.type.name} className='m-2'>
                  <Image src={'/types/'+type.type.name+'.svg'} height={40} width={40} alt="Type Image" title={type.type.name} />
                </div>
              )
              
            )}
            </div>
          </div>
          <div className="flex-1 flex-col p-5 content-center">

            <p className='ml-4 p-2 text-bold text-pokemon-dark text-5xl underline'>
              Stats
              <Image src={props.pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} height={100} width={100} alt="Pokemon Animated Image" />
            </p>
            {props.pokemon.stats.map((stat) => 
              (
                <div key={stat.stat.name} className="m-8 text-pokemon-dark font-bold">
                  {stat.stat.name.toUpperCase()}
                  <span className='text-pokemon-dark ml-4 p-2 border-solid border-2 rounded-2xl border-pokemon-dark bg-pokemon-secondary'>
                    {stat.base_stat}
                  </span>  
                </div>
              )
            )}
            
          </div>
        </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '5' } }],
    fallback: 'blocking', 
  }
}

type NextGetStaticPropsCtx = {
	params: {
		id: number
	}
	preview?: boolean
	previewDate?: any
}

export async function getStaticProps(context: NextGetStaticPropsCtx) {
    const pokemon = await getPokemon(context.params.id)
    return {
      props: {
        pokemon,
      },
    }
  }

export default PokemonDetail