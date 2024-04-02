
    import { useState } from "react";

    import { post } from "../services/authService";
    
    function AddCart({ refreshProducts }) {
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const requestBody = { title, description };
        
        post('/carts/add/:productId/:cartId', requestBody)
          .then((response) => {
            // Reset the state
            setTitle("");
            setDescription("");
            refreshProducts();
          })
          .catch((error) => console.log(error));
      };
    
    
      return (
        <div className="AddProduct">
          <h3>Add Product</h3>
    
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
    
            <label>Description:</label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
    
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
    
export default AddCart