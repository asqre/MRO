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
      className={`flex z-50 h-[67px]  justify-between items-center w-full p-5 max-w-6xl mx-auto px-[20px] bg-white`}
    >
      <Logo />

      <div className="flex items-center gap-4">
        <FaUserCircle className={`h-[32px] w-[32px] cursor-pointer `} />
      </div>
    </div>
  );
};

export default Navbar;
