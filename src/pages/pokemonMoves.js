import { useParams, Link } from 'react-router-dom';
import useFetch from '../useFetch';
import backIcon from '../icons/arrow-left.svg';
import PokemonMove from '../components/pokemonMove';
import NotFound from './notFound';

const PokemonMoves = () => {
    const { name } = useParams();
    const { data: pokemonDetails, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/' + name);

    return (
        <>
            {loading && (
                <>
                    <div className='container mx-auto p-10'><p className='bg-gray-100 p-5 rounded font-semibold text-center'>Loading...</p></div>
                </>
            )}
			{error && (<NotFound />)}
            {pokemonDetails && (
                <>
                    <header className='relative overflow-hidden bg-gray-900 drop-shadow-2xl p-5 md:p-7'>
                        <div className='container mx-auto relative'>
                            {pokemonDetails && (
                                <img className='absolute w-24 md:w-28 -top-7 md:-top-10 right-0 opacity-50' src={pokemonDetails.sprites.other.home.front_default} alt='Pokemon' />
                            )}
                            <Link to={'/pokemon/' + name} className='inline-block z-20'>
                                <img className='left-4 text-white w-9' src={backIcon} alt='Back' />
                            </Link>
                            <h2 className='block absolute ml-14 top-1 inset-0 text-white text-2xl'>All moves</h2>
                        </div>
                    </header>
                    <div className='container mx-auto mb-12'>
                        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center text-sm m-5 mt-10'>
                            {pokemonDetails && pokemonDetails.moves && pokemonDetails.moves.map(move => (
                                <PokemonMove move={move.move.name.replace('-', ' ')} url={move.move.url} key={move.move.name} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default PokemonMoves;