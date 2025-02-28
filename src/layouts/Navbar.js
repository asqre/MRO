import React, { useEffect, useState } from "react";
import Logo from "../component/common/Logo";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div
      className={`flex fixed z-50 h-[67px] w-full justify-between items-center min-w-[100%] sm:max-w-[90%] mx-auto px-[20px] bg-white`}
    >
      <Logo />

      <div className="flex items-center gap-4">
        <FaUserCircle className={`h-[32px] w-[32px] cursor-pointer `} />
      </div>
    </div>
  );
};

export default Navbar;
