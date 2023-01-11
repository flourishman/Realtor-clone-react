import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Oauth() {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white text-sm uppercase font-medium px-7 py-3 hover:bg-red-800 transition duration-150 ease-in-out rounded active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg">
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}