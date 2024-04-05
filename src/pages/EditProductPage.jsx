import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get, put, axiosDelete } from "../services/authService";
// import axios from "axios";
// import { SERVER_URL } from "../services/SERVER_URL";

function EditProductPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const [thisProduct, setThisProduct] = useState(null);

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    get(`/products/${productId}`)
      .then((response) => {
        const oneProduct = response.data;
        setTitle(oneProduct.title);
        setDescription(oneProduct.description);
        setPrice(oneProduct.price);
        setRating(oneProduct.rating);
        setStock(oneProduct.stock);
        setBrand(oneProduct.brand);
        setCategory(oneProduct.category);
        setThisProduct(response.data);
      })
      .catch((error) => console.log(error));
  }, [productId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title,
      description,
      price,
      rating,
      stock,
      brand,
      category,
    };

    put(`/products/update/${productId}`, requestBody).then((response) => {
      navigate(`/products/${productId}`);
    });
  };


  const deleteProduct = (e) => { 
    e.preventDefault()
    axiosDelete(`/products/delete/${productId}`)
      .then(() => {

        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {thisProduct && (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
          <form className="card bg-white p-4" onSubmit={handleFormSubmit}>
            <label className="block text-gray-700">
              Title
              <input
                type="text"
                value={title}
                name="title"
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <label className="block text-gray-700">
              Description
              <input
                type="text"
                value={description}
                name="description"
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>

            <label className="block text-gray-700">Price:</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
            />

            <label className="block text-gray-700">Rating:</label>
            <input
              type="text"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
            />

            <label className="block text-gray-700">Stock:</label>
            <input
              type="text"
              name="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
            />

            <label className="block text-gray-700">Brand:</label>
            <input
              type="text"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
            />

            <label className="block text-gray-700">Category:</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
            >
              <option value="">-- None --</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Laptops">Laptops</option>
              <option value="Fitness Trackers">Fitness Trackers</option>
              <option value="Gaming Laptops">Gaming Laptops</option>
              <option value="Smartwatches">Smartwatches</option>
              <option value="Gaming Consoles">Gaming Consoles</option>
              <option value="Headphones">Headphones</option>
              <option value="Monitors">Monitors</option>
              <option value="Televisions">Televisions</option>
              <option value="Cameras">Cameras</option>
              <option value="Speakers">Speakers</option>
              <option value="Gaming Accessories">Gaming Accessories</option>
              <option value="Tablets">Tablets</option>
              <option value="Drones">Drones</option>
              <option value="Graphics Cards">Graphics Cards</option>
              <option value="Smart Speakers">Smart Speakers</option>
              <option value="Wearable Devices">Wearable Devices</option>
            </select>

            {/* <label className="block text-gray-700">
              Thumbnail&nbsp;&nbsp;
              <input
                type="file"
                name="thumbnail"
                className="form-input mt-1 block w-full"
                onChange={handlePhotoChange}
              />
            </label> */}

            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold mt-5 py-2 px-4 border border-black rounded-lg"
            >
              Submit
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold mt-5 ml-5 py-2 px-4 border border-black rounded-lg"
              onClick={deleteProduct}
            >
              Delete
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default EditProductPage;
