import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get, put, axiosDelete } from "../services/authService";

const SERVER_URL = 'http://localhost:4000'

function EditProductPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [thisProduct, setThisProduct] = useState(null)

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    get(`/products/${productId}`)
      .then((response) => {
        const oneProduct = response.data;
        setTitle(oneProduct.title);
        setDescription(oneProduct.description);
        setThisProduct(response.data)
      })
      .catch((error) => console.log(error));
  }, [productId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    put(`/products/${productId}`, requestBody).then((response) => {
      navigate(`/products/${productId}`);
    });
  };

  const deleteProduct = () => {
    axiosDelete(`/${SERVER_URL}products/delete/${productId}`)
      .then(() => {
        setThisProduct(response.data)

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
            {/* Title */}
            <label className="block text-gray-700">
              Title
              <input
                type="text"
                value={thisProduct.title}
                name="title"
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
                onChange={(e) =>
                  setProduct((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </label>

            {/* Description */}
            <label className="block text-gray-700">
              Description
              <input
                type="text"
                value={thisProduct.description}
                name="description"
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
                onChange={(e) =>
                  setProduct((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </label>

            {/* Price */}
            <label className="block text-gray-700">
              Price
              <input
                type="text"
                value={thisProduct.price}
                name="price"
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
                onChange={(e) =>
                  setProduct((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </label>

            {/* Rating */}
            <label className="block text-gray-700">
              Rating
              <input
                type="text"
                value={thisProduct.rating}
                name="rating"
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
                onChange={(e) =>
                  setProduct((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </label>

            {/* Stock */}
            <label className="block text-gray-700">
              Stock
              <input
                type="text"
                value={thisProduct.stock}
                name="stock"
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
                onChange={(e) =>
                  setProduct((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </label>

            {/* Brand */}
            <label className="block text-gray-700">
              Brand
              <input
                type="text"
                value={thisProduct.brand}
                name="brand"
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
                onChange={(e) =>
                  setProduct((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </label>

            {/* Category */}
            <label className="block text-gray-700">
              Category
              <select
                value={thisProduct.category}
                name="category"
                className="w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:border-black"
                onChange={(e) =>
                  setProduct((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
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
            </label>

            

            {/* Thumbnail */}
            {/* Uncomment this section if you want to include a file input for thumbnail */}
            {/* <label className="block text-gray-700">
              Thumbnail&nbsp;&nbsp;
              <input
                type="file"
                name="thumbnail"
                className="form-input mt-1 block w-full"
                onChange={handlePhotoChange}
              />
            </label> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold mt-5 py-2 px-4 border border-black rounded-lg"
            >
              Edit Product
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold mt-5 ml-5 py-2 px-4 border border-black rounded-lg" onClick={deleteProduct}>Delete</button>
          </form>
        </div>
      )}
    </>
  );
}

export default EditProductPage;
