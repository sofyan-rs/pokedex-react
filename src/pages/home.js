import HeaderSearch from '../components/headerSearch';
import Footer from '../components/footer';
import PokemonList from '../components/pokemonList';
import useFetch from '../useFetch';
import { useParams, Link } from 'react-router-dom';
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
			{loading && <p>Loading...</p>}
			{error && <p>Error</p>}
			{pokemonlist && <PokemonList pokemonlist={pokemonlist} />}
			{pokemonlist && <Pagination currentPage={pages} total={totalPages} />}
			<Footer />
		</>
	);
}

export default Home;