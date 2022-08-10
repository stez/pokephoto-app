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
          <div className="w-64 bg-pokemon-primary p-4 content-center">
            <div>
              <Image src={props.pokemon.sprites.other['official-artwork'].front_default} height={150} width={150} alt="Pokemon Logo" />
            </div>
            <div className=' text-white font-bold'>
              {props.pokemon.name.toUpperCase()}
            </div>
            {props.pokemon.types.map((type) => 
              (
                <div key={type.type.name} className="m-8 text-pokemon-dark font-bold">
                  {type.type.name.toUpperCase()}
                  <Image src={'/types/'+type.type.name+'.svg'} height={70} width={70} alt="Pokemon Logo" />

                </div>
              )
            )}
          </div>
          <div className="flex-1 flex-col p-5 content-center">
            <div> 
              {/* <Image src={"/backgrounds/1.jpg"} layout="responsive" height={200} width={600} alt="Pokemon Logo" /> */}
              <Image src={props.pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} height={70} width={70} alt="Pokemon Logo" />
            </div>
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
    fallback: 'blocking', // can also be true or 'blocking'
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