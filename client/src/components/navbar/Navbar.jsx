import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMeetingRoom } from "react-icons/md";
import Rentlogo from "../../assets/logo/rentlogo.png";
import { RiHotelLine } from "react-icons/ri";
import { IoChatboxSharp } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";
import { UserContext } from "../../UserLayout";

function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to={"/"} className="text-white flex gap-2 text-lg font-bold">
          <img className="h-8" src={Rentlogo} alt="rentlogo" />
          <span className=" text-sm">
            To-Let
            <br />
            <strong>Room on Rent</strong>
          </span>
        </NavLink>

        {/* Navigation Links */}
        {user && (
          <div className="flex space-x-4">
            <div>
              <NavLink to={"/home "} className="flex items-center text-white">
                <span className="mr-1">
                  <AiOutlineHome />
                </span>
                <span>Home</span>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/room"} className="flex items-center text-white">
                <span className="mr-1">
                  <MdOutlineMeetingRoom />
                </span>
                <span>Rooms</span>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/flat"} className="flex items-center text-white">
                <span className="mr-1">
                  <RiHotelLine />
                </span>
                <span>Flats</span>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/profile"} className="flex items-center text-white">
                <span className="mr-1">
                  <BiMenu />
                </span>
                <span>Menu</span>
              </NavLink>
            </div>
            <div>
              <NavLink
                to={"/profile"}
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 bg-white rounded-3xl relative"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {!!user && <div className="text-white">{user?.data?.name}</div>}
              </NavLink>
            </div>
          </div>
        )}
        {!user && (
          <div className="flex space-x-4">
            <div className="flex gap-2">
              <div>
                <NavLink to={"/login"} className="flex items-center text-white">
                  <span className="mr-1">
                    <IoLogInOutline />
                  </span>
                  <span>Sign In</span>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to={"/register"}
                  className="flex items-center text-white"
                >
                  <span className="mr-1">
                    <IoLogInOutline />
                  </span>
                  <span>Sign Up</span>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
