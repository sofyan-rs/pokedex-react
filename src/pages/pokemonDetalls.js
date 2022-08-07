import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import HeaderDetails from '../components/headerDetails';

function pad(number, length) {
	var str = '' + number;
	while (str.length < length) {
		str = '0' + str;
	}
	return str;
}

const PokemonDetails = () => {
    const { name } = useParams();
    const { data: pokemonDetails, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/' + name);

    return (
        <>
            <HeaderDetails />
            {pokemonDetails && (
                <div className='container mx-auto'>
                    <div className='bg-white drop-shadow-2xl p-5 rounded-lg m-5'>
                        <div className='grid grid-cols-2'>
                            <div>
                                <span className='block text-gray-600'>#{pad(pokemonDetails.id, 3)}</span>
                                <span className='block text-2xl md:text-3xl capitalize text-main-blue'>{pokemonDetails.name}</span>
                            </div>
                            <div className='text-right py-3 md:py-5'>
                                {pokemonDetails.types.map((type) => (
                                    <span className={'bg-' + type.type.name + ' capitalize text-white text-xs px-2 py-1 inline-block rounded mr-2'}>{type.type.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className='flex mt-5 pb-5'>
                            <div className='flex-auto'>
                                <div className="mb-1 text-sm uppercase">{pokemonDetails.stats[0].stat.name}</div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                                    <div className="bg-green h-2 rounded-full" style={{width: '120%'}}></div>
                                </div>
                                <div className="mb-1 text-sm capitalize">{pokemonDetails.stats[1].stat.name}</div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                                    <div className="bg-pinky-red h-2 rounded-full" style={{width: '45%'}}></div>
                                </div>
                                <div className="mb-1 text-sm capitalize">{pokemonDetails.stats[2].stat.name}</div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                                    <div className="bg-bright-yellow h-2 rounded-full" style={{width: '45%'}}></div>
                                </div>
                                <div className="mb-1 text-sm capitalize">{pokemonDetails.stats[5].stat.name}</div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                                    <div className="bg-orange h-2 rounded-full" style={{width: '45%'}}></div>
                                </div>
                            </div>
                                
                            <div className='flex-none w-44 pl-5'>
                                <img src={pokemonDetails.sprites.other.home.front_default} alt={pokemonDetails.name} />
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default PokemonDetails;