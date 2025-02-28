import React from "react";

const SocialIcons = ({ to, icon: Icon }) => {
  return (
    <a
      href={to}
      className="rounded-full border-[0.26px] border-[#D6D6D6] bg-black cursor-pointer hover:bg-primary text-white hover:border-none w-[36px] h-[36px] flex items-center justify-center"
    >
      <Icon size={18} />
    </a>
  );
};

export default SocialIcons;
