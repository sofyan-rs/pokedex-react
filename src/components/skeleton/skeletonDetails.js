import HeaderDetails from '../headerDetails';

const SkeletonDetails = () => {
    return (
        <>
            <HeaderDetails />
            <div className='lg:flex animate-pulse'>
                <div className='bg-white drop-shadow-2xl p-6 pt-10 rounded-lg m-5 flex-auto'>
                    <div className='grid grid-cols-2 relative'>
                        <div>
                            <div className='h-7 bg-gray-200 rounded w-16 mb-3'></div>
                            <div className='h-9 bg-gray-200 rounded'></div>
                        </div>
                        <div className='absolute right-0 h-6 bg-gray-200 rounded w-16 mt-5'></div>
                    </div>
                    <div className='mt-7 pb-5'>
                        <div className='h-52 bg-gray-200 rounded'></div>
                    </div>
                </div>
                <div className='flex-none lg:w-2/5'>                            
                    <div className='bg-white drop-shadow-2xl p-6 rounded-lg m-5'>
                        <div className='h-9 bg-gray-200 rounded w-44'></div>
                        <div className='grid grid-cols-2 gap-3 mt-5'>
                            <div className='h-14 bg-gray-200 rounded'></div>
                            <div className='h-14 bg-gray-200 rounded'></div>
                        </div>
                    </div>
                    <div className='bg-white drop-shadow-2xl p-6 rounded-lg m-5'>
                        <div className='h-9 bg-gray-200 rounded w-44'></div>
                        <div className='grid grid-cols-2 gap-3 mt-5'>
                            <div className='h-20 bg-gray-200 rounded'></div>
                            <div className='h-20 bg-gray-200 rounded'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkeletonDetails;