import { CheckCircle } from "@phosphor-icons/react";
import React from "react";

const DetailList = ({ children }) => {
  return (
    <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-white">
      <CheckCircle size={20} color="#238636" />
      {children}
    </div>
  );
};

export default DetailList;
