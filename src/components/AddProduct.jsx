import { useState } from "react";
import { post } from "../services/authService";
import { useNavigate } from "react-router-dom";
// import isAdmin from "../../../ca-server/middleware/isAdmin";

function AddProduct( ) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  // const [thumbnail, setThumbail] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      description,
      price,
      rating,
      stock,
      brand,
      category,
      // thumbnail,
      // owner: req.user._id,
    };

    post("/products", requestBody)
      .then((response) => {
        setTitle("");
        setDescription("");
        setPrice("");
        setRating("");
        setStock("");
        setBrand("");
        setCategory("");
        // setThumbail("");
        // refreshProducts();
        navigate('/products')
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-1/2 mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4 border border-gray-300 p-4 rounded-md">
        <label className="block text-gray-700">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
  
        <label className="block text-gray-700">Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
  
        <label className="block text-gray-700">Price:</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
  
        <label className="block text-gray-700">Rating:</label>
        <input
          type="text"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
  
        <label className="block text-gray-700">Stock:</label>
        <input
          type="text"
          name="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
  
        <label className="block text-gray-700">Brand:</label>
        <input
          type="text"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
        />
  
        <label className="block text-gray-700">Category:</label>
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500"
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
  
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
  
}

export default AddProduct;
