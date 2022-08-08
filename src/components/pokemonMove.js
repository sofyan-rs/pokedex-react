import useFetch from "../useFetch";

const PokemonMove = ({url}) => {
    const { data: moves } = useFetch(url);

    return (
        <>
            {moves && (
                <div className={'bg-' + moves.type.name + ' text-white p-3 text-xs rounded-lg'}>
                    {/* <img className='mx-auto mb-1.5' src="/img/pokemon-types/grass.svg" alt={moves.type.name} /> */}
                    <span className='block capitalize'>{moves.name.replace('-', ' ')}</span>
                </div>
            )}
        </>
    )
}

export default PokemonMove;