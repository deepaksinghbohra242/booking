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
    <>
      <div className=" h-screen border-gray-600  pt-8 min-3 flex items-center justify-center">
        <div className=" bg-white h-screen w-1/2 border shadow-2xl flex flex-col p-8 rounded-md">
          <div className="border border-gray-300 h-2/3 rounded-2xl ">
            <img
              className="mx-auto w-16 h-2/3 rounded-full mb-4"
              src={user?.data?.pic}
              alt="User Profile"
            />
          </div>
          <h1 className="mt-4 text-2xl font-semibold mb-2">
            {user?.data?.userName}
          </h1>
          <p className="text-gray-600 mb-4">
            {user?.data?.firstName} {user?.data?.lastName}
          </p>
          <p className="text-gray-600 mb-4">{user?.data?.email}</p>
          <p className="text-gray-600 mb-4">{user?.data?.phone}</p>
          <label
            htmlFor="fileInput"
            className="flex gap-2 justify-center cursor-pointer mb-3 items-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600"
          >
            <input
              type="file"
              className="hidden "
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
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload
          </label>
          <button onClick={handleLogout} className="bg-red-400 p-3">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Account;
