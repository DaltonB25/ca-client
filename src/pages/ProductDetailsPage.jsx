import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams, Link } from "react-router-dom";

import { get, post } from "../services/authService";

function ProductDetailsPage(props) {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const authContext = useContext(AuthContext);

  const getProduct = () => {
    get(`/products/${productId}`)
      .then((response) => {
        setProduct(response.data)
        // const oneProduct = response.data;
        // setProduct(oneProduct);
      })
      .catch((error) => console.log(error));
  };

  const addToCart = () => {
    if (!authContext.isAuthenticated) {
      return;
    }

    post(`/carts/add/${productId}/${cartId}`)
    .then((response) => {
    })
    .catch((error) => console.log(error));
};



  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link to="/products" className="absolute top-16 left-4 z-10">
        <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold mt-5 py-2 px-4 border border-black rounded-lg">
          Back to Products
        </button>
      </Link>
      {product && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden relative mt-8 flex flex-row">
          <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover object-center" />
          <div className="p-4 border-black border-2 border-solid rounded-lg ">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-md font-semibold mb-2">Price: ${product.price}</p>
            <p className="text-md font-semibold mb-2">Rating: {product.rating}</p>
            <p className="text-md font-semibold mb-2">Stock: <span className={product.stock ? 'text-green-500' : 'text-red-500'}>{product.stock ? 'In Stock' : 'Out of Stock'}</span></p>
            <p className="text-md font-semibold mb-2">Brand: {product.brand}</p>
            <p className="text-md font-semibold mb-8">Category: {product.category}</p>
          </div>
          <div className="absolute bottom-1 right-2">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold mt-5 py-2 px-4 border border-black rounded-lg" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default ProductDetailsPage;

