import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
