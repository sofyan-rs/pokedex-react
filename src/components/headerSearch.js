import searchIcon from '../icons/search.svg';
import pokeballImg from '../img/Pokeball.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderSearch = () => {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${search.toLowerCase()}`);
	}

	return (
		<header className='bg-main-blue drop-shadow-2xl'>
			<div className='container mx-auto relative overflow-hidden'>
				<img className='absolute w-36 md:w-44 -top-8 -right-8 md:right-0 opacity-50' src={pokeballImg} alt='Pokemon' />
				<h1 className='text-4xl md:text-5xl leading-tight font-semibold text-white m-10 mt-20 mb-16'>Who are you looking for?</h1>
				<form className='bg-white rounded-full m-10 mb-14 relative block' onSubmit={handleSubmit}>
					<img className='absolute inset-y-3 left-4 text-white' src={searchIcon} alt='Search' />
					<input className='bg-transparent w-full rounded-full px-5 py-3 pl-12 focus:outline-none focus:ring-4 focus:ring-blue-700' type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='E.g. Pikachu' />
					<button className='absolute right-0 bg-gray-900 text-white font-semibold px-7 py-2 rounded-full float-right m-1' type='submit'>GO</button>
				</form>
			</div>
		</header>
	);
}

export default HeaderSearch;