import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Brown" },
];

const College = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to the College Page
      </h1>
      {Users.map((user) => (
        <Link to={`/nested/college/${user.id}`} className=" mt-4">
          {user.name}
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default College;
