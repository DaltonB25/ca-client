// src/pages/LoginPage.jsx

import { useState, useContext } from "react";

import { AuthContext } from "../context/auth.context";

import { Link, useNavigate } from "react-router-dom";

import { post } from "../services/authService";

function LoginPage() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [thisUser, setThisUser] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //   const handleEmail = (e) => setEmail(e.target.value);
  //   const handlePassword = (e) => setPassword(e.target.value);

  const handleTextChange = (e) => {
    setThisUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    post("/auth/login", thisUser)
      .then((response) => {
        console.log("Login response ===>", response.data);
        storeToken(response.data.authToken);
        authenticateUser();
        if (response.data.user.type == "Admin") {
          navigate('/admin-panel')
        } else {
          navigate("/"); 
        }
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h1 className="mb-8 text-center text-2xl">Login</h1>

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={thisUser.email}
              onChange={handleTextChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={thisUser.password}
              onChange={handleTextChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-700">Login</button>
        </form>

        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

        <p className="mt-4">Don't have an account yet? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;