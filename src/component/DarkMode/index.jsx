import React from "react";
import { Moon, SunDim } from "@phosphor-icons/react";

const DarkMode = ({ toogleDarkMode, darkMode }) => {
  return (
    <button
      className="sticky dark:bg-[#333B43] bg-[#333B43] text-neutral-300 rounded-full top-2 left-2 p-1"
      onClick={toogleDarkMode}
    >
      {darkMode ? (
        <SunDim size={18} color="white">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="4s"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 0 0"
            to="360 0 0"
            repeatCount="indefinite"
          ></animateTransform>
        </SunDim>
      ) : (
        <Moon size={18}></Moon>
      )}
    </button>
  );
};

export default DarkMode;
