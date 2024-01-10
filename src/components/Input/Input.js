import React, { forwardRef } from "react";
import "./Input.scss";

const Input = forwardRef(
  ({ type, placeholder, handelChange, className }, ref) => {
    return (
      <input
        ref={ref}
        onChange={handelChange}
        className={"input " + className}
        placeholder={placeholder}
        type={type}
      />
    );
  }
);

export default Input;
