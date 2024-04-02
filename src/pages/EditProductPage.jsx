import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";


function EditProductPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const { productId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`${API_URL}/api/products/${productId}`)
      .then((response) => {
        const oneProduct = response.data;
        setTitle(oneProduct.title);
        setDescription(oneProduct.description);
      })
      .catch((error) => console.log(error));
    
  }, [productId]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    axios
      .put(`${API_URL}/api/products/${productId}`, requestBody)
      .then((response) => {
        navigate(`/products/${productId}`)
      });
  };
  
  
  const deleteProduct = () => {
    
    axios
      .delete(`${API_URL}/api/products/${productId}`)
      .then(() => {
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="EditProductPage">
      <h3>Edit the product</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update product</button>
      </form>

      <button onClick={deleteProduct}>Delete product</button>
    </div>
  );
}

export default EditProductPage;

//need to change commit title
