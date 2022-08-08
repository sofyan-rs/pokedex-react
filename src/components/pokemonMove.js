import useFetch from "../useFetch";

const PokemonMove = ({move, url}) => {
    const { data: moves, loading, error } = useFetch(url);

    return (
        <>
            {moves && (
                <div className={'bg-' + moves.type.name + ' text-white p-3 text-xs rounded-lg'}>
                    <span className='block capitalize'>{moves.name.replace('-', ' ')}</span>
                </div>
            )}
        </>
    )
}

export default PokemonMove;