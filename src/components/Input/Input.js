import React from "react";
import "./Input.scss";
function Input({ type, placeholder, className }) {
  return (
    <input
      className={"input " + className}
      placeholder={placeholder}
      type={type}
    />
  );
}

export default Input;
