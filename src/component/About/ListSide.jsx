import React from "react";

const ListSide = ({ logo, label, children }) => {
  return (
    <div className="flex flex-col gap-2 p-5 rounded-md bg-white shadow-md dark:bg-[#333B43] dark:text-white w-full lg:w-80">
      <div className="flex items-center gap-2">
        {logo}
        {label}
      </div>
      {children}
    </div>
  );
};

export default ListSide;
