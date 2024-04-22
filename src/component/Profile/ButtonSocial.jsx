import React from "react";

const ButtonSocial = ({ href, children }) => {
  return (
    <a href={href} className="btn btn-primary hover:btn-secondary btn-sm">
      {children}
    </a>
  );
};

export default ButtonSocial;
