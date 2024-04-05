import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cart.context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const { cartId } = useParams();
  const { cart } = useContext(CartContext);

  const navigate = useNavigate()


  const getCartItems = () => {
    if (cart) {
      console.log("This is our cart ===>", cart);
      setCartItems(cart.products);
    }
  };

  useEffect(() => {
    getCartItems();
    console.log("cart itmes ===>", cartItems);
  }, [cartId, cart]);

  

  return (
                
    <div className="cart-page bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="cart-items grid gap-4">
        {cart && cart.products.length > 0 &&
          cart.products.map((product) => (
            <div
              key={product._id}
              className="cart-item bg-white p-4 rounded-lg shadow-md flex items-center"
            >
              <div className="item-details ml-4">
                <img
                  src={product.product.thumbnail}
                  alt={product.title}
                  className="w-1/12 h-auto object-cover object-center"
                />

                <h3 className="text-1xl font-bold mb-2">
                  {product.product.title}
                </h3>
                {/* <p className="text-gray-600">{product.description}</p> */}
                <p className="text-gray-800 font-bold">${product.price.toFixed(2).toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <p className="text-md font-semibold mb-2">
                  Quantity: {product.quantity}
                </p>
                <button
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold mt-5 py-2 px-4 border border-black rounded-lg"
                  onClick={() => navigate(`/products/${product.product._id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
      <Link to="/checkout" className="absolute bottom-16 right-4 z-10">

        <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold mt-5 py-2 px-4 border border-black rounded-lg">
          Place Order
        </button>
      </Link>
    </div>
  );
}

export default CartPage;
