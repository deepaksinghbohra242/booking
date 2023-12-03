import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate ,Link } from "react-router-dom";
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
      <div className=" h-full border-gray-600 pt-8 min-3 flex items-center justify-center">
        <div className="bg-white h-screen w-1/2 border shadow-2xl flex flex-col p-4 rounded-md">
          <div className="h-1/2 rounded-full ">
            <img
              className="mx-auto w-1/2 h-full rounded-full mb-4"
              src={user?.data?.pic}
              alt="User Profile"
            />
          </div>
          <div className="flex justify-between  font-semibold">
            <div className="ml-10 mt-4">
              <h1 className="mt-4 text-2xl ml-10 capitalize font-bold mb-2">
                 {user?.data?.userName}
              </h1>
              <p className="text-gray-600  mb-4">
                Name : {user?.data?.firstName} {user?.data?.lastName}
              </p>
              <p className="text-gray-600 mb-4">Email : {user?.data?.email}</p>
              <p className="text-gray-600 mb-4">Phone Number : {user?.data?.phone}</p>
            </div>
            <div className="mt-10 mr-10 flex flex-col">
              <Link to={'/uploadPhoto'} 
                className="flex gap-2 bg-gray-400 justify-center cursor-pointer mb-3 items-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600"
              >
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
                Update Image
              </Link>
              <button onClick={handleLogout} className=" bg-red-400 p-4 rounded-2xl">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
