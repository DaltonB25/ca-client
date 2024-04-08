import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import UserProfilePage from "./pages/UserProfilePage";
import Footer from "./components/Footer";
import AddProduct from "./components/AddProduct";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import AdminPanelPage from "./pages/AdminPanelPage";
import CheckOutPage from "./pages/CheckOutPage";



function App() {
  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
  };

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };



  return (
    <div className="">
    
      <Navbar />
      <Header />
      <Footer />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />

        <Route element={<LoggedIn />}>

          <Route path="/carts/:cartId" element={<CartPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/products/AddProduct" element={<AddProductPage />} />
          <Route path="/products/edit/:productId" element={<EditProductPage />} />
          <Route path='/admin-panel' element={<AdminPanelPage />} />
          <Route path='/checkout' element={<CheckOutPage />} />

        </Route>

        <Route element={<NotLoggedIn />}>

          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Route>

      </Routes>

    </div>
  );
}


export default App;