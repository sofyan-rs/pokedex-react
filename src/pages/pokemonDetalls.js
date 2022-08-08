import { useParams, Link } from 'react-router-dom';
import useFetch from '../useFetch';
import HeaderDetails from '../components/headerDetails';
import PokemonStat from '../components/pokemonStat';
import AbilityPokemon from '../components/pokemonAbility';
import PokemonMove from '../components/pokemonMove';
import NotFound from './notFound';

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
            {loading && (
                <>
                    <HeaderDetails />
                    <div className='lg:flex animate-pulse'>
                        <div className='bg-white drop-shadow-2xl p-6 pt-10 rounded-lg m-5 flex-auto'>
                            <div className='grid grid-cols-2 relative'>
                                <div>
                                    <div className='h-7 bg-gray-200 rounded w-16 mb-3'></div>
                                    <div className='h-9 bg-gray-200 rounded'></div>
                                </div>
                                <div className='absolute right-0 h-6 bg-gray-200 rounded w-16 mt-5'></div>
                            </div>
                            <div className='mt-7 pb-5'>
                                <div className='h-52 bg-gray-200 rounded'></div>
                            </div>
                        </div>
                        <div className='flex-none lg:w-2/5'>                            
                            <div className='bg-white drop-shadow-2xl p-6 rounded-lg m-5'>
                                <div className='h-9 bg-gray-200 rounded w-44'></div>
                                <div className='grid grid-cols-2 gap-3 mt-5'>
                                    <div className='h-14 bg-gray-200 rounded'></div>
                                    <div className='h-14 bg-gray-200 rounded'></div>
                                </div>
                            </div>
                            <div className='bg-white drop-shadow-2xl p-6 rounded-lg m-5'>
                                <div className='h-9 bg-gray-200 rounded w-44'></div>
                                <div className='grid grid-cols-2 gap-3 mt-5'>
                                    <div className='h-20 bg-gray-200 rounded'></div>
                                    <div className='h-20 bg-gray-200 rounded'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
			{error && (<NotFound />)}
            {pokemonDetails && (
                <>
                    <HeaderDetails />
                    <div className='container mx-auto'>
                        <div className='lg:flex'>
                            <div className='bg-white drop-shadow-2xl p-6 pt-10 rounded-lg m-5 flex-auto'>
                                <div className='grid grid-cols-2'>
                                    <div>
                                        <span className='block text-gray-600'>#{pad(pokemonDetails.id, 3)}</span>
                                        <h1 className='text-2xl md:text-3xl capitalize font-semibold text-main-blue'>{pokemonDetails.name}</h1>
                                    </div>
                                    <div className='text-right py-3 md:py-3'>
                                        {pokemonDetails.types.map((type) => (
                                            <span className={'bg-' + type.type.name + ' capitalize text-white text-xs md:text-base px-2 py-1 inline-block rounded mr-2'} key={type.type.name}>{type.type.name}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex mt-5 pb-5'>
                                    <div className='flex-auto'>
                                        <PokemonStat stat='HP' bg='green' value={pokemonDetails.stats[0].base_stat} />
                                        <PokemonStat stat='Attack' bg='pinky-red' value={pokemonDetails.stats[1].base_stat} />
                                        <PokemonStat stat='Defense' bg='bright-yellow' value={pokemonDetails.stats[2].base_stat} />
                                        <PokemonStat stat='Speed' bg='orange' value={pokemonDetails.stats[5].base_stat} />
                                        <PokemonStat stat='Special Attack' bg='fairy' value={pokemonDetails.stats[3].base_stat} />
                                        <PokemonStat stat='Special Defense' bg='dragon' value={pokemonDetails.stats[4].base_stat} />
                                    </div>
                                    <div className='flex-none w-44 md:w-64 relative pl-5'>
                                        <img className='absolute top-10 md:-top-8 pr-3' src={pokemonDetails.sprites.other.home.front_default} alt={pokemonDetails.name} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex-none lg:w-2/5'>                            
                                <div className='bg-white drop-shadow-2xl p-6 rounded-lg m-5'>
                                    <h2 className='text-2xl'>Information</h2>
                                    <div className='grid grid-cols-2 gap-3 text-center text-sm mt-5'>
                                        <div>
                                            <span className='text-gray-400'>Height</span>
                                            <div className='bg-light-gray text-xs md:text-sm border-2 border-gray-100 p-2 mt-1 rounded-lg text-gray-500'>
                                                <span className='mr-3'>{(pokemonDetails.height*0.32808).toFixed(2).toString().replace(".", "'")}"</span>
                                                <span className='ml-3'>{pokemonDetails.height/10} m</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className='text-gray-400'>Weight</span>
                                            <div className='bg-light-gray text-xs md:text-sm border-2 border-gray-100 p-2 mt-1 rounded-lg text-gray-500'>
                                                <span className='mr-3'>{(pokemonDetails.weight*0.22046).toFixed(2)} lbs</span>
                                                <span className='ml-3'>{pokemonDetails.weight/10} kg</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-white drop-shadow-2xl p-6 rounded-lg m-5'>
                                    <h2 className='text-2xl'>Abilities</h2>
                                    <div className='flex gap-3 text-center text-sm mt-5'>
                                        {pokemonDetails.abilities.map((ability, index) => (
                                            <AbilityPokemon ability={ability.ability.name.replace('-', ' ')} letter={ability.ability.name.charAt(0)} index={index} key={ability.ability.name}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {pokemonDetails.moves.length > 0 && (
                            <div className='bg-white drop-shadow-2xl p-7 rounded-lg m-5 mb-10'>
                                <h2 className='text-2xl inline-block'>Moves</h2>
                                <Link to={'moves'} className='inline-block text-sm bg-gray-900 px-7 py-2 rounded-full text-white float-right'>See all</Link>
                                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center text-sm mt-8'>
                                    {(() => {
                                        const moves = [];
                                        if ((pokemonDetails.moves.length > 0) && (pokemonDetails.moves.length <= 6 )) {
                                            for (let i = 0; i < pokemonDetails.moves.length; i++) {
                                                moves.push(pokemonDetails.moves[i]);
                                            }
                                        } else if (pokemonDetails.moves.length > 6) {
                                            for (let i = 0; i <= 5; i++) {
                                                moves.push(pokemonDetails.moves[i]);
                                            }
                                        }                                
                                        return (
                                            moves.map((move) => (
                                                <PokemonMove url={move.move.url} key={move.move.name} />
                                            ))
                                        )
                                    })()}
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    )
}

export default PokemonDetails;