import React, { useState } from "react";
import axios from 'axios';
import swal from "sweetalert" 
import {Navigate} from "react-router-dom"

function RegisterForm() {
  const [credentials, setCredentials] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [redirect , setRedirect] = useState(false)

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post('/user/register',{
        userName: credentials.userName,
        firstName: credentials.firstName,
        lastName : credentials.lastName,
        email : credentials.email,
        phone : credentials.phone,
        password : credentials.password
      });
      setRedirect(true);
      swal({
        title: "Success!",
        text: "Account Created Successfully",
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
    console.log("Form submitted with data:", credentials);
  };

  if(redirect){
    return <Navigate to={"/home"} />
  }

  return (
    <>
      <div className="container border w-1/3  border-gray-600 mx-auto  rounded-2xl mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center pt-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Username */}
        <div className="mb-4 pt-6">
          <label htmlFor="userName" className="block text-sm font-semibold text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={credentials.userName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={credentials.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={credentials.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={credentials.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4 flex justify-center pt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default RegisterForm;
