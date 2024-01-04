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
      className={
        disable
          ? `button button-disable ${className}`
          : `button button-continue ${className}`
      }
    >
      {children}
    </button>
  );
}
