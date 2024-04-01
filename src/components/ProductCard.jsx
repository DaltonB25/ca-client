
import { Link } from 'react-router-dom'
import { useContext, useEffect } from "react";



function ProductCard ( { title, price, _id, handleDelete } ) {

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={thumbnail} alt={image} />
            </div>

            <div className="price">{price}</div>

            <div className='product-btns'>
                <button onClick={() => handleDelete(_id)}>Delete</button>
                <Link to = {`/products/${_id}`}>
                    <button>Details</button>           
                </Link>
            </div>
        </div>
    )

    
}

export default ProductCard;

// title: String,
// description: String,
// price: Number,
// rating: Number,
// stock: Number,
// brand: String,
// category: String,
// thumbnail: String,
// images: Array,