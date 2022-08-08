import PokemonListContent from './pokemonListContent';

const PokemonList = ({ pokemonlist }) => {


  return (
		<div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-10 mb-2 px-4'>
			{pokemonlist.results.map((pokemon) => (
				<PokemonListContent url={pokemon.url} key={pokemon.name}/>
			))}
		</div>
  );
}

export default PokemonList;