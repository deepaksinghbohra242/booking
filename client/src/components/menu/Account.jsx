import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserLayout";

function Account() {
  const { user, setUser } = useContext(UserContext);
  const [checkLogout, setCheckLogout] = useState(false);

  async function handleLogout() {
    try {
      await axios.post("/user/logout");
      setUser(null);
      setCheckLogout(true);
    } catch (error) {
      console.log(error);
    }
  }

  if (checkLogout) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex justify-around h-screen mt-4 border">
      {/* Left Column - Profile Image */}
      <div className="relative h-35">
        <img
          className="mb-4 w-full h-3/4 rounded"
          src={user?.data?.pic}
          alt="Profile"
        />
      </div>

      {/* Middle Column - User Information */}
      <div className="flex flex-col justify-center px-4">
        <div className="relative">
          <h1 className="text-2xl font-bold mb-2">{user?.data?.userName}</h1>
          <p className="text-gray-600 mb-4">
            {user?.data?.firstName} {user?.data?.lastName}
          </p>
          <div className="mb-4">
            <p className="text-gray-700">Email: {user?.data?.email}</p>
            <p className="text-gray-700">Phone: {user?.data?.phone}</p>
          </div>

          {/* File Input */}
          <label
            htmlFor="fileInput"
            className="text-center cursor-pointer border border-dashed p-2 rounded"
          >
            <input
              type="file"
              className="hidden"
              multiple
              name=""
              id="fileInput"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mb-2 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload
          </label>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-400 p-3 mt-4 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
