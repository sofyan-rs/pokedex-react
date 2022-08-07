import { Link } from 'react-router-dom';
import backIcon from '../icons/arrow-left.svg';
import pokeballImg from '../img/Pokeball.svg';

const HeaderDetails = () => {
	return (
		<header className='relative overflow-hidden bg-main-blue p-5 md:p-7'>
			<div className='container mx-auto relative'>
                <img className='absolute w-24 md:w-28 -top-10 md:-top-12 right-0 opacity-50' src={pokeballImg} alt='Pokemon' />
                <Link to='/'>
                    <img className='left-4 text-white w-9' src={backIcon} alt='Back' />
                </Link>
            </div>

		</header>
	);
}

export default HeaderDetails;