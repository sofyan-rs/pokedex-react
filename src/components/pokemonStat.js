const PokemonStat = ({ stat, bg, value }) => {
    return (
        <>
            <div className='mb-1 text-sm'>{stat}</div>
            <div className='w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden'>
                <div className={'bg-' + bg + ' h-2 rounded-full'} style={{width: value + '%'}}></div>
            </div>
        </>
    )
}

export default PokemonStat;