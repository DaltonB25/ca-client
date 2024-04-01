import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import { get } from "../services/authService";

import ProductCard from "../components/ProductCard";

const API_URL = import.meta.env.VITE_API_URL;

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleChange = (event, updateState) => {
    updateState(event.target.value);
  };

    axios
      .get(`${API_URL}/api/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  

  const getAllProducts = () => {
    axios
      .get(`${API_URL}/api/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="ProductPage">
   
      <div className="flex justify-between items-center p-2 font-bold border-b">
        <span style={{ flexBasis: "25%" }}>product</span>
        <span style={{ flexBasis: "25%" }}>Id</span>
      </div>

      {products &&
        products.map(
          (product) => (
              <ProductCard
                key={product._id}
                {...product}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              />
          )
        )}
  
  </div>
  );
}

export default ProductsPage;
// const getAllProducts = () => {
//   axios
//   .get(`${API_URL}/products`)
//   console.log(response.data)
//     .then((response) => setProducts(response.data))
//     .catch((error) => console.log(error));
// };

// // We set this effect will run only once, after the initial render
// // by setting the empty dependency array - []
// useEffect(() => {
//   getAllProducts();
// }, []);

// return (
//   <div className="ProductPage">

//     {products.map((product) => {
//         return (
//           <div className="ProductCard card" key={product.id} >
//             <Link to={`/products/${product.id}`}>
//               <h3>{product.title}</h3>
//             </Link>
//           </div>
//         );
//       })}     