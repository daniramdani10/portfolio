import React from "react";

const HeaderAbout = ({ label, children }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-semibold">{label}</div>
      <div className="text-xs text-neutral-600 dark:text-white">{children}</div>
    </div>
  );
};

export default HeaderAbout;
