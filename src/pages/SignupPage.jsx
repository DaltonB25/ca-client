// src/pages/SignupPage.jsx

import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authService";

function SignupPage() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [name, setName] = useState("");

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //   const handleEmail = (e) => setEmail(e.target.value);
  //   const handlePassword = (e) => setPassword(e.target.value);
  //   const handleName = (e) => setName(e.target.value);

  const handleTextChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };




  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await post("/auth/signup", newUser)
      storeToken(response.data.authToken);
      authenticateUser();
      await post("/carts/add")
      if (response.data.user.type == "Admin") {
        navigate('/admin-panel')
      } else {
        navigate("/"); 
      }
    } catch (error) {
      console.log(error)
      setErrorMessage(err.response.data.message);
      setNewUser({
        email: "",
        password: "",
        name: "",
      })
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h1 className="mb-8 text-center text-2xl">Sign Up</h1>

        <form onSubmit={handleSignupSubmit} className="space-y-4">
          <div className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleTextChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleTextChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleTextChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>


          <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-700">Sign Up</button>
        </form>

        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

        <p className="mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
      </div>
    </div>
  );
}

export default SignupPage;