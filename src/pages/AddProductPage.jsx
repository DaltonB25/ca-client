import AddProduct from "../components/AddProduct";

const AddProductPage = ({ addNewProduct, productId, setProductId }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <AddProduct addNewProduct={addNewProduct} productId={productId} setProductId={setProductId} />
    </div>
  );
}

export default AddProductPage;
