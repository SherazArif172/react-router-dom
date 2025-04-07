import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Nested = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  mt-7">
      <h1 className="text-4xl font-bold text-blue-600">Nested Routes</h1>
      <nav className="bg-blue-600 text-white p-4 flex gap-6 mt-3 rounded-lg">
        <NavLink
          to="college"
          className={({ isActive }) =>
            `text-lg ${isActive ? "font-bold text-yellow-400" : "text-white"}`
          }
        >
          College
        </NavLink>
        <NavLink
          to="school"
          className={({ isActive }) =>
            `text-lg ${isActive ? "font-bold text-yellow-400" : "text-white"}`
          }
        >
          School
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nested;
