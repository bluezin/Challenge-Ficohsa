import React from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <header
        className="flex items-center justify-center gap-10 p-4 bg-indigo-500 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          alt="logo"
          src="https://dog.ceo/img/dog-api-logo.svg"
          className="w-16"
        />
        <h1 className="text-5xl custom-font text-white">
          Find your favorite pet
        </h1>
      </header>
      {children}
    </>
  );
};

export default Layout;
