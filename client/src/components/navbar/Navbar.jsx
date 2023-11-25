import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMeetingRoom } from "react-icons/md";
import Rentlogo from "../../assets/logo/rentlogo.png";
import { RiHotelLine } from "react-icons/ri";
import { IoChatboxSharp } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";

function Navbar() {
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
        <div className="flex space-x-4">
          <div>
            <NavLink to={"/"} className="flex items-center text-white">
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
            <NavLink to={""} className="flex items-center text-white">
              <span className="mr-1">
                <IoChatboxSharp />
              </span>
              <span>Chats</span>
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
              <NavLink to={"/register"} className="flex items-center text-white">
                <span className="mr-1">
                  <IoLogInOutline />
                </span>
                <span>Sign Up</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
