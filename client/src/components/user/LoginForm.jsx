import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert'

function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [redirect , setRedirect] = useState(false);
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const data = await axios.post('/user/login',{
        email : credentials.email,
        password : credentials.password
      });
      setRedirect(true);
      console.log("Form submitted with data:", data);
      swal({
        title: "Success!",
        text: "Login Successfully",
        icon: "success",
        button: "Ok!",
      });
      
    } catch (error) {
      swal({
        title: "Try Again!",
        text: "failed",
        icon: "error",
        button: "Ok!",
      });
    }
    
  };

  if(redirect){
    return <Navigate to={'/home'} />
  }

  return (
    <div className="container w-5/12 h-4/5 mx-auto mt-8 border shadow-2xl  border-gray-300 rounded-2xl">
      <h1 className="text-3xl font-bold text-center mt-6 mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4 pt-4">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border hover:shadow-2xl border-solid rounded-md"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-bold text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border hover:shadow-2xl border-solid rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-8 flex justify-center pt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
