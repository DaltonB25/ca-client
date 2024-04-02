import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../services/authService';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const { cartId } = useParams();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await get(`/carts/${cartId}`);
        if (response.data && response.data.items) {
          setCartItems(response.data.items);
        } else {
          console.log('No cart items found.');
        }
      } catch (error) {
        console.log('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [cartId]);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
