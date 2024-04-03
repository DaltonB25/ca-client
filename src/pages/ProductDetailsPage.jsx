import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams, Link } from "react-router-dom";

import { axiosDelete, get, post, put } from "../services/authService";
import { CartContext } from "../context/cart.context";

function ProductDetailsPage(props) {
  const [product, setProduct] = useState(null);
  const { productId, cartId } = useParams();
  const [rating, setRating] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  const getProduct = () => {
    get(`/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
  };

  const changeQuantity = async (operand) => {
    try {
      let currentQuantity = cart.products.find(element => element.product === product._id).quantity
      operand === "minus" ? currentQuantity === 1 ? currentQuantity -= 1 : currentQuantity -= 1 : currentQuantity += 1
      
      console.log(currentQuantity)

      if(currentQuantity !== 0){
        const response =  await put("/carts/update-quantity/" + product._id, {quantity: currentQuantity})
        setCart(response.data)
      }else {
        const response = await axiosDelete("/carts/" + product._id )
        setCart(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }


  const addToCart = () => {
    console.log(cart);
    post(`/carts/add/${productId}/${cart._id}`, { quantity: 1 })
      .then((response) => {
        setCart(response.data)
      })
      .catch((error) => {
        console.log("Error adding product to cart:", error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/products" className="absolute top-16 left-4 z-10">
        <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold mt-5 py-2 px-4 border border-black rounded-lg">
          Back to Products
        </button>
      </Link>
      {product && (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden relative mt-8 ">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-auto object-cover object-center"
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden relative mt-8 p-4 border-2 border-solid w-full ">
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-md font-semibold mb-2">
                Price: ${product.price}
              </p>
              <p className="text-md font-semibold mb-2">
                Rating: {product.rating}
              </p>
              <p className="text-md font-semibold mb-2">
                Stock:{" "}
                <span
                  className={product.stock ? "text-green-500" : "text-red-500"}
                >
                  {product.stock ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p className="text-md font-semibold mb-2">
                Brand: {product.brand}
              </p>
              <p className="text-md font-semibold mb-2">
                Category: {product.category}
              </p>
              <p className="text-md font-semibold mb-2">
                Quantity: {product.quantity}
              </p>

              {cart &&
              cart.products.length &&
              cart.products.find(
                (element) => element.product === product._id
              ) ? (
                <>
                  <button onClick={() => changeQuantity("plus")}> + </button>
                  <span>
                    {cart.products.find(
                      (element) => element.product === product._id
                    ).quantity}
                  </span>
                  <button onClick={() => changeQuantity("minus")}> - </button>
                </>
              ) : (
                <button
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold mt-5 py-2 px-4 border border-black rounded-lg"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
          <div className="mt-8 border-2 border-solid p-4 rounded-lg relative">
            <h2 className="text-xl font-bold mb-4">Product Reviews</h2>
            <div className="flex justify-end items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`text-2xl ml-1 ${
                    star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
            <form className="flex flex-col">
              <label htmlFor="review">Your Review:</label>
              <textarea
                id="review"
                name="review"
                rows="4"
                className="border border-gray-600 rounded-lg mb-4 p-2"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductDetailsPage;
