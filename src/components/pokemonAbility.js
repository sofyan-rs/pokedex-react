const AbilityPokemon = ({ ability, letter, index }) => {
    return (
        <div className={index == 0 || index == 2 ? 'bg-bright-yellow text-white p-4 rounded-lg w-1/2 flex-auto' : 'bg-orange text-white p-4 rounded-lg w-1/2 flex-auto'}>
            <span className={index == 0 || index == 2 ? 'text-bright-yellow inline-block bg-white text-base w-8 py-1 mb-1 rounded-full uppercase' : 'text-orange inline-block bg-white text-base w-8 py-1 mb-1 rounded-full uppercase'}>{letter}</span>
            <span className='block capitalize'>{ability}</span>
        </div>
    )
}

export default AbilityPokemon;