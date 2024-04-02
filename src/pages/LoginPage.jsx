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
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">

    <div className="flex flex-col items-center border-2 border-solid border-black w-96 m-10 p-5 rounded-lg bg-gray-200">
    <h1 className="mb-3">Login</h1>

      <form onSubmit={handleLoginSubmit} className="flex flex-col items-center w-full">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={thisUser.email}
          onChange={handleTextChange}
          className="w-full border border-gray-400 rounded-md mb-2 p-1"
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={thisUser.password}
          onChange={handleTextChange}
          className="w-full border border-gray-400 rounded-md mb-2 p-1"
        />

        <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700">
          Login
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
    </div>
    </div>
  );
}

export default LoginPage;