import { Link } from 'react-router-dom';

function ProductCard({ title, price, _id, thumbnail }) {
    return (
        <div className="flex flex-col items-center justify-between border-2 border-solid border-gray-200 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 m-5 bg-white shadow-md rounded-lg p-4">
            <div className="product-image flex items-center justify-center h-40">
                <img src={thumbnail} alt={title} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="product-title text-sm font-semibold text-black mt-2 mb-2">{title}</div>

            <div className="flex justify-between w-full mt-auto">
                <div className="text-black font-semibold ">${price}</div>

                <div className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-1 md:px-2 border border-black rounded-lg">
                    <Link to={`/products/${_id}`} className="text-white">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
