const SkeletonList = () => {
    return (
        <div className='animate-pulse'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='h-7 bg-gray-200 rounded col-span-2'></div>
                <div className='h-7 bg-gray-200 rounded col-span-1'></div>
            </div>
            <div className='h-48 bg-gray-200 rounded my-4'></div>
            <div className='w-16 h-6 bg-gray-200 rounded'></div>
        </div>
    )
}

export default SkeletonList;