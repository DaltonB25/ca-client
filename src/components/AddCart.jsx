import { useState } from "react";

import { post } from "../services/authService";
import { useParams } from "react-router-dom";

function AddCart({}) {
  const { productId, cartId } = useParams;

  const [cart, setCart] = useState(null);

    const addProductToCart = () => {
    post(`/carts/add/${productId}/${cartId}`)
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    addProductToCart();
  }, []);

  return (
    <div className="AddProduct">
      <h3>Add Product</h3>
      {/* Moved the button inside a form to trigger handleSubmit */}
      <form onSubmit={(e) => {
        e.preventDefault();
        addProductToCart();
      }}>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

export default AddCart;
