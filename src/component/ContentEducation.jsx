import React from "react";

const ContentEducation = ({ title, year, subtitle, desc, children }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between font-bold text-secondary">
        <div className="">{title}</div>
        <div>{year}</div>
      </div>
      <div>{subtitle}</div>
      <div>{desc}</div>
      <div>{children}</div>
    </div>
  );
};

export default ContentEducation;
