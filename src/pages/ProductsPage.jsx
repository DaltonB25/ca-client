import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

import { get } from "../services/authService";

import ProductCard from "../components/ProductCard";

const API_URL = import.meta.env.VITE_API_URL;

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleChange = (event, updateState) => {
    updateState(event.target.value);
  };



  const getAllProducts = () => {
   get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-row flex-wrap m-16 ml-44">
   
      {/* <div className="text-center items-center h-4 m-1">
        <span style={{ flexBasis: "25%" }}>product</span>
      </div> */}

      {products.length > 0 &&
        products.map(
          (product, index) => (
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
