import searchIcon from '../icons/search.svg';
import pokeballImg from '../img/Pokeball.svg';

const HeaderSearch = () => {
	return (
		<header className='relative overflow-hidden bg-main-blue p-10 md:p-20'>
			<img className='absolute w-44 -top-8 -right-10 opacity-50' src={pokeballImg} alt='Pokemon' />
			<div className='container mx-auto'>
				<h1 className='text-4xl md:text-5xl leading-tight font-semibold text-white mb-10'>Who are you looking for?</h1>
				<form className='bg-white rounded-full relative block' action=''>
					<img className='absolute inset-y-3 left-4 text-white' src={searchIcon} alt='Search' />
					<input className='bg-transparent w-full rounded-full px-5 py-3 pl-12 focus:outline-none focus:ring-4 focus:ring-blue-700' type='text' placeholder='E.g. Pikachu' />
					<button className='absolute right-0 bg-gray-900 text-white font-semibold px-7 py-2 rounded-full float-right m-1' type='submit'>GO</button>
				</form>
			</div>
		</header>
	);
}

export default HeaderSearch;