import HeaderSearch from '../components/headerSearch';
import PokemonList from '../components/pokemonList';
import useFetch from '../useFetch';
import { useParams } from 'react-router-dom';
import Pagination from '../components/pagination';

const Home = () => {
	const { page } = useParams();
	const pages = page ? parseInt(page) : 0;
	let setOffset = [];
	for (let i = 0; i < pages-1; i++) {
		setOffset.push(pages+i);
	}
	const getOffset = setOffset[setOffset.length-1];
	const offset = pages >=2 ? getOffset+'0' : 0;
	const limit = 20;
	const totalPages = 58;
	const { data: pokemonlist, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/?offset=' + offset + '&limit=' + limit);

	return (
		<>
			<HeaderSearch />
			{error && <div className='container mx-auto p-10'><p className='bg-white drop-shadow-2xl p-5 rounded font-semibold text-center'>Error Can't Fetch Data</p></div>}
			{!error && !loading && pokemonlist && <PokemonList pokemonlist={pokemonlist} />}
			{!error && !loading && pokemonlist && <Pagination currentPage={pages} total={totalPages} />}
		</>
	);
}

export default Home;