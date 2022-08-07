import { useRouter } from 'next/router'
import AppBar from '../components/appbar'

const PokemonDetail = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
        <AppBar />
        <div className="flex flex-row h-screen bg-pokemon-primary mt-14">     
            <div className="flex w-1/5 bg-pokemon-primary">
                <p>Pokemon: {id}</p>
            </div>
            <div className="flex-1 w-4/5 mx-auto p-4 h-full shadow-lg bg-white">
            </div>
        </div>
    </div>
  )
}

export default PokemonDetail