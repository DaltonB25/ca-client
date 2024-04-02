import { Link } from 'react-router-dom';

function ProductCard({ title, price, _id, thumbnail }) {
    return (
        <div className="flex flex-col items-center justify-between border-2 border-solid border-gray-200 w-2/12 m-5 bg-white shadow-md rounded-lg p-4">
            <div className="product-image">
                <img src={thumbnail} alt={title} className="w-full h-auto" />
            </div>
            <div className="product-title text-sm font-semibold text-black mt-2 mb-2">{title}</div>

            <div className="flex justify-between w-full mt-auto">
                <div className="text-black font-semibold ">${price}</div>

                <div className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black rounded-lg">
                    <Link to={`/products/${_id}`} className="text-white">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
