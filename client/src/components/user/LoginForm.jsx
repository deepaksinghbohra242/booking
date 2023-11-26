import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../UserLayout";

function LoginForm() {
  // const [email , setEmail] = useState('');
  // const [password , setPassword] = useState('');
  // const [redirect , setRedirect] = useState('');
  // const {setUser} = useContext(UserContext);
  // async function handleSubmit(e){
  //   e.preventDefault();
  //   try {
  //     const {data} = await axios.post('/user/login',{
  //       email,
  //       password
  //     });
  //     setUser(data)
  //     setRedirect(true);
  //   } catch (error) {
  //     alert(error)
  //   }
  // }
  // if(redirect){
  //   return <Navigate to={'/'} />
  // }
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
      const {data} = await axios.post('/user/login',{
        email : credentials.email,
        password : credentials.password
      });
      setRedirect(true);
      swal({
        title: "Success!",
        text: "Login Successfully",
        icon: "success",
        button: "Ok!",
      });
    } catch (error) {
      swal({
        title: "login failed!",
        text: error,
        icon: "success",
        button: "Ok!",
      });
    }
    console.log("Form submitted with data:", credentials);
  };

  if(redirect){
    return <Navigate to={'/'} />
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-600"
          >
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

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-600"
          >
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
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;