import { Link } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/auth.context";
import { CartContext } from "../context/cart.context";

import cartIcon from "../images/cart.png";
import profileIcon from "../images/avatar.png";
import storeIcon from "../images/online-shopping-icon.webp"

function Navbar() {
  const { isLoggedIn, user, logOutUser, admin } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-600 fixed w-screen top-0 mb-4 h-16 flex justify-between items-center p-5">
      <div className="flex items-center">
        <Link to="/">
          <button className="text-white pr-5">Home</button>
        </Link>
    
          <Link to="/products">
            <button className="text-white pr-5">Shop</button>
          </Link>
        
        {getToken() && admin && (
          <Link to="/admin-panel">
            <button className="text-white pr-5">Add Product</button>
          </Link>
        )}
        {/* {getToken() && (
          <button className="text-white pr-5" onClick={logOutUser}>
            Logout
          </button>
        )} */}
      </div>

      {/* Store Icon - Centered */}
      <div className="flex items-center justify-center">
        <Link to="/">
          <img src={storeIcon} alt="Store" className="h-10 w-15 cursor-pointer mr-4" />
        </Link>
      </div>

      <div className="flex items-center justify-end">
        {getToken() && cart && (
          <div className="mr-3">
            <Link to={`/carts/${cart._id}`}>
              <img src={cartIcon} alt="Cart" className="h-8 w-8" />
            </Link>
          </div>
        )}

        {getToken() && user && (
          <div className="relative mr-5 mt-1">
            <button className="focus:outline-none" onClick={handleDropdownToggle}>
              <img src={profileIcon} alt="Profile" className="h-8 w-8 cursor-pointer" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </Link>
                <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left" onClick={logOutUser}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {!getToken() && (
          <div>
            <Link to="/signup">
              <button className="text-white pr-5">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="text-white pr-5">Login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

// {getToken() && (
//   <Link to="/products">
//     <button className="text-white pr-5">Shop</button>
//   </Link>
// )} i am taking the token out for products