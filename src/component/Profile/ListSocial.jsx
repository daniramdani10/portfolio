import React from "react";

const ListSocial = ({ link, children }) => {
  return (
    <a
      href={link}
      className="text-xs bg-slate-50 px-3 py-2 rounded-md dark:bg-[#333B43] dark:text-white"
    >
      {/* <InstagramLogo size={20} /> */}
      {children}
    </a>
  );
};

export default ListSocial;
