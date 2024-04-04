import { useState, useContext, createContext, useEffect } from "react";
import { AuthContext } from "./auth.context";
import { get } from "../services/authService";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(null);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await get("/carts");
        setCart(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    user && fetchCart();
  }, [user]);


  useEffect(() => {
    console.log(cart)
  }, [cart])
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
