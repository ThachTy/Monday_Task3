import React from "react";
import "./Button.scss";
export default function Button({ className, type, children }) {
  return (
    <button type={type} className={`button + ${className}`}>
      {children}
    </button>
  );
}
