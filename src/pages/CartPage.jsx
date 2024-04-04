import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../services/authService';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/cart.context';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const { cartId } = useParams();
  const { cart } = useContext(CartContext);


  const getCartItems = () => {
    if (cart) {
      console.log("This is our cart ===>", cart)
      setCartItems(cart.products)
    }
  };

  useEffect(() => {
    getCartItems();
  }, [cartId, cart]);


  return (

  <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 && cartItems.map((product) => (
          <div key={product._id} className="cart-item">
            <img src={product.thumbnail} alt={product.name} />
            <div className="item-details">
              <h3>{product.name}</h3>
              <ProductCard
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                _id={product.product}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  )

  

}

export default CartPage;
