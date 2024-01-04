import React from "react";
import "./RadioButton.scss";

function RadioButton({ id, name, children, handleChange, value }) {
  return (
    <label className="radiobutton" htmlFor={id}>
      <input
        id={id}
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        className="radio"
        type="radio"
      />
      <span className="dot"></span>
      <span>{children}</span>
    </label>
  );
}

export default RadioButton;
