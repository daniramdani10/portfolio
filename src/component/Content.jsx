import React from "react";

const Content = ({ title, children }) => {
  return (
    <div className="flex gap-10 flex-col py-14">
      <div className="font-bold text-neutral-300 text-lg">{title}</div>
      <div className="flex flex-col gap-10">{children}</div>
    </div>
  );
};

export default Content;
