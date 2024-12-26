import React from "react";
import "./styles.sass";

const Button = ({ className, children, disabled }) => {
  return (
    <button
      className={`btn ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
