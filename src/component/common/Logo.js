import React from "react";
import logo from "../../assets/logo/tride_logo.png";

const Logo = () => {
  return (
    <div className="">
      <a
        href="/"
        className="flex flex-row space-x-2 items-center justify-center"
      >
        <img src={logo} alt="logo" className="h-16 w-20" />
        <div className="text-xl font-normal text-primary">MRO Analysis</div>
      </a>
    </div>
  );
};

export default Logo;
