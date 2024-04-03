// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT

import cartIcon from "../images/cart.png";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); // <== ADD

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
            <button className="text-white pr-5">Products</button>
          </Link>
        )}
        {getToken() && (
          <Link to="/users/:userId">
            <button className="text-white pr-5">Profile</button>
          </Link>
        )}
        {getToken() && (
          <button className="text-white pr-5" onClick={logOutUser}>
            Logout
          </button>
        )}
      </div>

        {getToken() ? (
          <div className="relative">
           <Link to="/carts/:cartId">
            <img src={cartIcon} alt="Cart" className="h-8 w-8 mr-3" />
           </Link>
         </div>
         ) : (
        <div>
          <Link to="/signup">
            <button className="text-white pr-5">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="text-white pr-5">Login</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
