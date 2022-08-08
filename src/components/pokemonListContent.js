import useFetch from '../useFetch';
import { Link } from 'react-router-dom';

function pad(number, length) {
	var str = '' + number;
	while (str.length < length) {
		str = '0' + str;
	}
	return str;
}

const PokemonListContent = ({ url }) => {
	const { data: pokemon, loading } = useFetch(url);
	
    return (
		<div className='bg-white drop-shadow-2xl p-4 rounded-lg'>
			{loading && (
				<div className='animate-pulse'>
					<div className='grid grid-cols-3 gap-4'>
						<div className='h-7 bg-gray-200 rounded col-span-2'></div>
						<div className='h-7 bg-gray-200 rounded col-span-1'></div>
					</div>
					<div className='h-48 bg-gray-200 rounded my-4'></div>
					<div className='w-16 h-6 bg-gray-200 rounded'></div>
				</div>
			)}
			{pokemon && (
				<Link to={'/pokemon/' + pokemon.name}>
					<div>
						<span className='text-main-blue font-semibold inline-block capitalize text-[14px] md:text-lg'>{pokemon.name}</span>
						<span className='float-right inline-block text-gray-500 text-[14px] md:text-base pt-0.5'>#{pad(pokemon.id, 3)}</span>
					</div>
					<img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
					<div className='mt-6'>
						{pokemon.types.map((type) => (
							<span className={'bg-' + type.type.name + ' capitalize text-white text-xs px-2 py-1 inline-block rounded mr-1.5'} key={type.type.name}>{type.type.name}</span>
						))}
					</div>
				</Link>
			)}
		</div>
    )
}

export default PokemonListContent;