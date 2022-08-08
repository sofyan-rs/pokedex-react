import HeaderSearch from '../components/headerSearch';
import Footer from '../components/footer';

const NotFound = () => {
    return (
        <>
            <HeaderSearch />
            <div className="container mx-auto text-center p-16 align-center mb-20">
                <h1 className='font-semibold text-3xl mb-5'>Oops! Try Again.</h1>
                <p>The pokemon you're looking does not exist in this list.</p>
                <div className='w-60 md:w-72 mx-auto'>
                    <img classname='' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10094.png" alt="Pika" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFound;