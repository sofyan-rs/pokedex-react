import React from 'react';
import HeaderSearch from '../components/headerSearch';
import PokemonList from '../components/pokemonList';
import useFetch from '../useFetch';

const Home = () => {
	const { data: pokemonlist, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/');

	return (
		<div>
		<HeaderSearch />
		{loading && <p>Loading...</p>}
		{error && <p>Error</p>}
		{pokemonlist && <PokemonList pokemonlist={pokemonlist} />}
		</div>
	);
}

export default Home;