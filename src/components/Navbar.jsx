// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context"; // <== IMPORT

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
    <nav className="bg-gray-600 fixed w-screen top-0 mb-4 h-16 flex justify-start p-5  ">
      <Link to="/">
        <button className="text-white pr-5">Home</button>
      </Link>

      {/*    UPDATE     */}
      {getToken() ? (
        <>
        <Link to="/products">
          <button className="text-white pr-5">Products</button>
        </Link>
        <Link to="/carts/`${cartId}`">
        <button className="text-white pr-5">Cart</button>
        </Link>
        <Link to="/users">
        <button className="text-white pr-5">Profile</button>
        </Link>
          <button className="text-white pr-5" onClick={logOutUser}>Logout</button>
          {/* <span>{user && user.name}</span> */}
        </>
      ) : (
        <>
          <Link to="/signup">
            {" "}
            <button className="text-white pr-5">Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button className="text-white pr-5">Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;