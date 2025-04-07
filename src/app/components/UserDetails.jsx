import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();

  const { id } = params;

  return (
    <div className="flex flex-col items-center justify-center min-h-[50px] p-5 mt-6  py-10">
      <h1 className="text-5xl font-bold text-blue-600">{id}</h1>
      <p className="text-gray-700 mt-4 text-xl">
        This is a detailed page for the selected User's Detail.
      </p>
    </div>
  );
};

export default UserDetail;
