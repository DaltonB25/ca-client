// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT
import { CartContext } from "../context/cart.context";

import cartIcon from "../images/cart.png";
import AdminPanelPage from "../pages/AdminPanelPage";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser, admin } = useContext(AuthContext); // <== ADD

  const { cart } = useContext(CartContext)

  const getToken = () => {
    return localStorage.getItem("authToken");
  };
  //  Update the rendering logic to display different content
  //  depending on whether the user is logged in or not
  return (
    <nav className="bg-gray-600 fixed w-screen top-0 mb-4 h-16 flex justify-between items-center p-5">
      <div className="flex items-center">
        <Link to="/">
          <button className="text-white pr-5">Home</button>
        </Link>
        {getToken() && (
          <Link to="/products">
            <button className="text-white pr-5">Shop</button>
          </Link>
        )}
        {getToken() && user && (
          <Link to='/profile'>
            <button className="text-white pr-5">Profile</button>
          </Link>
        )}
        {getToken() && admin && (
          <Link to='/products/AddProduct'>
            <button className="text-white pr-5">Add Product</button>
          </Link>
        )}
        {getToken() && (
          <button className="text-white pr-5" onClick={logOutUser}>
            Logout
          </button>
        )}
      </div>

        {getToken() && cart &&
          <div className="relative">
           <Link to={`/carts/${cart._id}`}>
            <img src={cartIcon} alt="Cart" className="h-8 w-8 mr-3" />
           </Link>
         </div>
        
         
        }

         <>
         
            {
                !getToken() &&
                <div>
                  <Link to="/signup">
                    <button className="text-white pr-5">Sign Up</button>
                  </Link>
                  <Link to="/login">
                    <button className="text-white pr-5">Login</button>
                  </Link>
                </div>

            }

         </>

      
    </nav>
  );
}
export default Navbar;
