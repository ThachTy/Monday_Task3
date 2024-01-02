import React from "react";
import "./Button.scss";
export default function Button({
  className,
  type,
  children,
  disable,
  handleClick,
}) {
  return (
    <button
      onClick={handleClick}
      disabled={disable}
      type={type}
      className={`button + ${className}`}
    >
      {children}
    </button>
  );
}
