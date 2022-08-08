import { Link } from 'react-router-dom';

const Pagination = ({ total, currentPage }) => {
    const next = currentPage <= 1 ? 2 : currentPage + 1;
    const prev = currentPage - 1;
    

    return (
        <div className="container mx-auto px-5 py-5 mb-16">
            {currentPage > 1 && <Link to={`/page/${prev}`} className="bg-gray-900 text-white font-semibold px-7 py-2 rounded-full float-left inline-block">Prev</Link>}
            {currentPage < total && <Link to={`/page/${next}`} className="bg-gray-900 text-white font-semibold px-7 py-2 rounded-full float-right inline-block">Next</Link>}
        </div>
    )
}

export default Pagination;